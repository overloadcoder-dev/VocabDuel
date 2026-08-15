import { afterEach, describe, expect, it, vi } from 'vitest'
import { SpeechService } from './speech'

class FakeUtterance {
  lang = ''
  rate = 1
  pitch = 1
  voice: SpeechSynthesisVoice | null = null
  onend: ((event: SpeechSynthesisEvent) => void) | null = null
  onerror: ((event: SpeechSynthesisErrorEvent) => void) | null = null

  constructor(readonly text: string) {}
}

const britishVoice = { lang: 'en-GB', default: false, name: 'Test British English', voiceURI: 'test-gb', localService: true } as SpeechSynthesisVoice
const americanVoice = { lang: 'en-US', default: true, name: 'Test American English', voiceURI: 'test-us', localService: true } as SpeechSynthesisVoice

function installSpeechSynthesis(finish: 'end' | 'cancelled' = 'end', voices: SpeechSynthesisVoice[] = [americanVoice, britishVoice]) {
  let spoken: FakeUtterance | undefined
  const synthesis = {
    speaking: false,
    pending: false,
    paused: false,
    getVoices: () => voices,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    cancel: vi.fn(),
    resume: vi.fn(),
    speak: vi.fn((utterance: FakeUtterance) => {
      spoken = utterance
      queueMicrotask(() => finish === 'end'
        ? utterance.onend?.({} as SpeechSynthesisEvent)
        : utterance.onerror?.({ error: 'canceled' } as SpeechSynthesisErrorEvent))
    }),
  }
  vi.stubGlobal('window', { speechSynthesis: synthesis, SpeechSynthesisUtterance: FakeUtterance, setTimeout, clearTimeout })
  vi.stubGlobal('SpeechSynthesisUtterance', FakeUtterance)
  return { synthesis, getSpoken: () => spoken }
}

afterEach(() => vi.unstubAllGlobals())

describe('SpeechService', () => {
  it('prefers an available British English voice without cancelling an idle synthesizer', async () => {
    const { synthesis, getSpoken } = installSpeechSynthesis()
    const result = await new SpeechService().speak('  clear  ')

    expect(result).toEqual({ ok: true })
    expect(synthesis.cancel).not.toHaveBeenCalled()
    expect(getSpoken()).toMatchObject({ text: 'clear', lang: 'en-GB', rate: 1, voice: britishVoice })
  })

  it('allows an explicit language override', async () => {
    const { getSpoken } = installSpeechSynthesis()
    await new SpeechService().speak('clear', { lang: 'en-US' })

    expect(getSpoken()).toMatchObject({ lang: 'en-US', voice: americanVoice })
  })

  it.each([0.5, 0.75, 1, 1.25] as const)('uses the selected %s× pronunciation rate', async (rate) => {
    const { getSpoken } = installSpeechSynthesis()
    await new SpeechService().speak('careful', { rate })
    expect(getSpoken()?.rate).toBe(rate)
  })

  it('does not report deliberate browser cancellations as playback failures', async () => {
    installSpeechSynthesis('cancelled')
    await expect(new SpeechService().speak('again')).resolves.toEqual({ ok: false, cancelled: true })
  })
})
