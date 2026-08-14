export type SpeechSpeed = 'normal' | 'slow'

export interface SpeakOptions {
  speed?: SpeechSpeed
  lang?: string
}

export interface SpeechResult {
  ok: boolean
  message?: string
}

export class SpeechService {
  isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window
  }

  getEnglishVoices(): SpeechSynthesisVoice[] {
    if (!this.isSupported()) return []
    return window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLocaleLowerCase().startsWith('en'))
  }

  speak(term: string, options: SpeakOptions = {}): Promise<SpeechResult> {
    if (!this.isSupported()) return Promise.resolve({ ok: false, message: 'Pronunciation is not supported in this browser.' })
    const cleanTerm = term.trim()
    if (!cleanTerm) return Promise.resolve({ ok: false, message: 'There is no word to pronounce.' })

    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(cleanTerm)
      utterance.lang = options.lang ?? 'en-US'
      utterance.rate = options.speed === 'slow' ? 0.7 : 1
      const voices = this.getEnglishVoices()
      utterance.voice = voices.find((voice) => voice.lang.toLocaleLowerCase() === utterance.lang.toLocaleLowerCase()) ?? voices[0] ?? null
      utterance.onend = () => resolve({ ok: true })
      utterance.onerror = () => resolve({ ok: false, message: 'Pronunciation could not be played. Please try again.' })
      try {
        window.speechSynthesis.cancel()
        window.speechSynthesis.speak(utterance)
      } catch {
        resolve({ ok: false, message: 'Pronunciation could not be played on this device.' })
      }
    })
  }

  cancel(): void {
    if (this.isSupported()) window.speechSynthesis.cancel()
  }
}

export const speechService = new SpeechService()

