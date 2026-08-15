export type SpeechSpeed = 'normal' | 'slow'

export interface SpeakOptions {
  speed?: SpeechSpeed
  lang?: string
}

export interface SpeechResult {
  ok: boolean
  message?: string
  cancelled?: boolean
}

export class SpeechService {
  private requestId = 0

  isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window
  }

  getEnglishVoices(): SpeechSynthesisVoice[] {
    if (!this.isSupported()) return []
    return window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLocaleLowerCase().startsWith('en'))
  }

  private async waitForEnglishVoices(): Promise<SpeechSynthesisVoice[]> {
    const available = this.getEnglishVoices()
    if (available.length) return available
    const synthesis = window.speechSynthesis
    if (!('addEventListener' in synthesis)) return []
    return new Promise((resolve) => {
      let settled = false
      const finish = (): void => {
        if (settled) return
        settled = true
        synthesis.removeEventListener('voiceschanged', finish)
        resolve(this.getEnglishVoices())
      }
      synthesis.addEventListener('voiceschanged', finish, { once: true })
      window.setTimeout(finish, 400)
    })
  }

  async speak(term: string, options: SpeakOptions = {}): Promise<SpeechResult> {
    if (!this.isSupported()) return Promise.resolve({ ok: false, message: 'Pronunciation is not supported in this browser.' })
    const cleanTerm = term.trim().replace(/\s+/g, ' ')
    if (!cleanTerm) return Promise.resolve({ ok: false, message: 'There is no word to pronounce.' })

    const requestId = ++this.requestId
    const voices = await this.waitForEnglishVoices()
    if (requestId !== this.requestId) return { ok: false, cancelled: true }
    const synthesis = window.speechSynthesis
    if (synthesis.speaking || synthesis.pending) {
      synthesis.cancel()
      await new Promise((resolve) => window.setTimeout(resolve, 25))
      if (requestId !== this.requestId) return { ok: false, cancelled: true }
    }
    if (synthesis.paused) synthesis.resume()

    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(cleanTerm)
      const requestedLanguage = options.lang ?? 'en-US'
      const voice = voices.find((candidate) => candidate.lang.toLocaleLowerCase() === requestedLanguage.toLocaleLowerCase())
        ?? voices.find((candidate) => candidate.default)
        ?? voices[0]
      utterance.voice = voice ?? null
      utterance.lang = voice?.lang ?? requestedLanguage
      utterance.rate = options.speed === 'slow' ? 0.75 : 1
      utterance.pitch = 1

      let settled = false
      const finish = (result: SpeechResult): void => {
        if (settled) return
        settled = true
        window.clearTimeout(timeout)
        resolve(result)
      }
      const timeout = window.setTimeout(() => {
        finish({ ok: false, message: 'Pronunciation took too long. Please try again.' })
        if (requestId === this.requestId) synthesis.cancel()
      }, 12_000)
      utterance.onend = () => finish({ ok: true })
      utterance.onerror = (event) => {
        if (event.error === 'canceled' || event.error === 'interrupted') {
          finish({ ok: false, cancelled: true })
          return
        }
        const messages: Partial<Record<SpeechSynthesisErrorCode, string>> = {
          'audio-busy': 'Your audio output is busy. Please try again.',
          'audio-hardware': 'No audio output is available on this device.',
          network: 'The pronunciation voice could not connect. Please try again.',
          'language-unavailable': 'An English pronunciation voice is unavailable on this device.',
          'voice-unavailable': 'The selected pronunciation voice is unavailable.',
          'not-allowed': 'Pronunciation was blocked. Tap Listen to try again.',
        }
        finish({ ok: false, message: messages[event.error] ?? 'Pronunciation could not be played. Please try again.' })
      }
      try {
        synthesis.speak(utterance)
      } catch {
        finish({ ok: false, message: 'Pronunciation could not be played on this device.' })
      }
    })
  }

  cancel(): void {
    this.requestId += 1
    if (this.isSupported()) window.speechSynthesis.cancel()
  }
}

export const speechService = new SpeechService()
