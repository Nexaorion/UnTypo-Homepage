import { useEffect, useRef, useState } from 'react'

interface Scenario {
  mode: string
  modeColor: string
  utterance: string
  result: string
}

const SCENARIOS: Scenario[] = [
  {
    mode: '转写',
    modeColor: '#3e6b4f',
    utterance: '帮我写封邮件 跟客户确认周四下午两点的评审会 顺便把议程发过去',
    result: '您好，想与您确认本周四 14:00 的评审会议，届时将同步项目进展并讨论下一阶段计划，议程详见附件。期待您的回复。',
  },
  {
    mode: '翻译',
    modeColor: '#c98a1b',
    utterance: '翻译成英文 这个功能下个版本再上 这周先修稳定性问题',
    result: "This feature will ship in the next release. This week we're focusing on stability fixes first.",
  },
  {
    mode: '指令',
    modeColor: '#d9481f',
    utterance: '把这段需求改写成三条验收标准 要可以测试',
    result: '1. 用户按住热键时立即开始录音，松开后 2 秒内完成转写；\n2. 转写结果准确插入原光标位置，不覆盖已选文本；\n3. 断网时给出明确错误提示，不丢失本地历史。',
  },
]

type Phase = 'recording' | 'thinking' | 'typing' | 'rest'

const WAVE_BARS = 22

export function DictationDemo() {
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('recording')
  const [uttered, setUttered] = useState('')
  const [typed, setTyped] = useState('')
  const timers = useRef<number[]>([])

  const scenario = SCENARIOS[scenarioIndex]

  useEffect(() => {
    const clearAll = () => {
      timers.current.forEach((t) => window.clearTimeout(t))
      timers.current = []
    }
    const later = (fn: () => void, ms: number) => {
      timers.current.push(window.setTimeout(fn, ms))
    }

    setPhase('recording')
    setUttered('')
    setTyped('')

    // speak the utterance char by char
    const chars = [...scenario.utterance]
    chars.forEach((_, i) => {
      later(() => setUttered(scenario.utterance.slice(0, i + 1)), 500 + i * 62)
    })
    const speakDone = 500 + chars.length * 62

    later(() => setPhase('thinking'), speakDone + 350)

    const resultChars = [...scenario.result]
    const typingStart = speakDone + 1300
    resultChars.forEach((_, i) => {
      later(() => setTyped(scenario.result.slice(0, i + 1)), typingStart + i * 26)
    })
    const typingDone = typingStart + resultChars.length * 26

    later(() => setPhase('rest'), typingDone + 200)
    later(() => {
      setScenarioIndex((v) => (v + 1) % SCENARIOS.length)
    }, typingDone + 2600)

    return clearAll
  }, [scenarioIndex])

  const recording = phase === 'recording'

  return (
    <div className="relative rounded-2xl border-[1.5px] border-ink bg-paper-card shadow-card">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b-[1.5px] border-ink/15 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-vermilion/80" />
        <span className="h-3 w-3 rounded-full bg-amberish/70" />
        <span className="h-3 w-3 rounded-full bg-moss/70" />
        <span className="ml-3 font-mono text-xs text-ink-faint">untitled — 你正在写的任何地方</span>
        <span
          className="ml-auto rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold text-paper"
          style={{ backgroundColor: scenario.modeColor }}
        >
          {scenario.mode}模式
        </span>
      </div>

      <div className="px-5 py-5 sm:px-6">
        {/* utterance bubble */}
        <div className="flex min-h-[74px] items-start gap-3">
          <div className="relative mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border-[1.5px] border-ink bg-ink">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="#f5f0e3" strokeWidth="2">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
            </svg>
            {recording ? (
              <span className="absolute inset-0 rounded-full border-[1.5px] border-vermilion ping-soft" aria-hidden />
            ) : null}
          </div>
          <div className="flex-1 rounded-xl rounded-tl-sm border-[1.5px] border-ink/20 bg-paper-deep/60 px-4 py-2.5 text-[15px] leading-relaxed text-ink-soft">
            {uttered ? (
              <>
                「{uttered}
                {recording ? <span className="caret" aria-hidden /> : '」'}
              </>
            ) : (
              <span className="text-ink-faint">…</span>
            )}
          </div>
        </div>

        {/* waveform / status */}
        <div className="mt-4 flex h-10 items-center gap-[3px]" aria-hidden>
          {recording ? (
            Array.from({ length: WAVE_BARS }).map((_, i) => (
              <span
                key={i}
                className="wave-bar w-[3.5px] rounded-full bg-vermilion"
                style={{
                  height: `${12 + ((i * 37) % 26)}px`,
                  ['--wave-delay' as never]: `${(i % 7) * 90}ms`,
                  ['--wave-duration' as never]: `${620 + ((i * 53) % 420)}ms`,
                }}
              />
            ))
          ) : phase === 'thinking' ? (
            <p className="font-mono text-xs tracking-wide text-ink-faint">
              正在按「{scenario.mode}」模式处理<span className="caret" aria-hidden />
            </p>
          ) : (
            <p className="font-mono text-xs tracking-wide text-moss">✓ 已输入到光标位置</p>
          )}
        </div>

        {/* result editor */}
        <div className="mt-3 min-h-[150px] rounded-xl border-[1.5px] border-ink/25 bg-paper px-4 py-3.5 text-[15px] leading-[1.85] whitespace-pre-wrap">
          {typed ? (
            <>
              {typed}
              {phase === 'typing' ? <span className="caret" aria-hidden /> : null}
            </>
          ) : (
            <span className="text-ink-faint">松开按键后，文字会出现在这里。</span>
          )}
        </div>
      </div>

      {/* hold-to-talk bar */}
      <div className="flex items-center justify-center gap-3 border-t-[1.5px] border-ink/15 px-4 py-3.5">
        <kbd className={`keycap ${recording ? 'pressed keycap--vermilion' : ''}`}>Ctrl</kbd>
        <span className="text-xs text-ink-faint">+</span>
        <kbd className={`keycap ${recording ? 'pressed keycap--vermilion' : ''}`}>Alt</kbd>
        <span className="text-xs text-ink-faint">+</span>
        <kbd className={`keycap min-w-[7.5em] ${recording ? 'pressed keycap--vermilion' : ''}`}>
          {recording ? '松开即输入' : '长按说话'}
        </kbd>
      </div>
    </div>
  )
}
