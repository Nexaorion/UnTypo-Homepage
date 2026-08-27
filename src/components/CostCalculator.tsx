import { useMemo, useState } from 'react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const TYPELESS_PLANS = {
  yearly: { usd: 12, label: '年付' },
  monthly: { usd: 30, label: '月付' },
} as const
type PlanKey = keyof typeof TYPELESS_PLANS

const USD_TO_CNY = 7.2

const CHARS_PER_MINUTE = 150
const SPEECH_CNY_PER_HOUR = 1.06
const QWEN_INPUT_CNY_PER_M = 0.2
const QWEN_OUTPUT_CNY_PER_M = 0.8
const TOKENS_PER_CHAR = 1.6
const OUTPUT_RATIO = 1.3

export function CostCalculator() {
  const [dailyChars, setDailyChars] = useState(3000)
  const [plan, setPlan] = useState<PlanKey>('yearly')

  const calc = useMemo(() => {
    const minutesPerDay = dailyChars / CHARS_PER_MINUTE
    const hoursPerMonth = (minutesPerDay * 30) / 60
    const speechCost = hoursPerMonth * SPEECH_CNY_PER_HOUR

    const inputTokens = dailyChars * TOKENS_PER_CHAR * 30
    const outputTokens = inputTokens * OUTPUT_RATIO
    const textCost = (inputTokens / 1_000_000) * QWEN_INPUT_CNY_PER_M + (outputTokens / 1_000_000) * QWEN_OUTPUT_CNY_PER_M

    const total = speechCost + textCost
    const typelessCny = TYPELESS_PLANS[plan].usd * USD_TO_CNY
    return {
      minutesPerDay: Math.round(minutesPerDay),
      speechCost,
      textCost,
      total,
      typelessCny,
      saved: typelessCny - total,
      ratio: total / typelessCny,
    }
  }, [dailyChars, plan])

  const fmt = (n: number) => (n < 10 ? n.toFixed(1) : Math.round(n).toString())
  const barWidth = Math.min(100, Math.max(4, calc.ratio * 100))

  return (
    <section id="cost" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Cost · 成本可控"
          title={
            <>
              用多少，付多少，
              <span className="scribble">账单看得见</span>
            </>
          }
          description="Typeless Pro 是固定的订阅费；UnTypo 软件本身完全免费，你只为自己调用的模型付费。"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          {/* calculator */}
          <Reveal className="min-w-0">
            <div className="rounded-2xl border-[1.5px] border-ink bg-paper-card p-6 shadow-card sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <label htmlFor="daily-chars" className="text-base font-semibold">
                  我每天大约口述
                </label>
                <span className="font-display text-3xl font-extrabold text-vermilion tabular">
                  {dailyChars.toLocaleString()} <span className="text-base font-bold text-ink">字</span>
                </span>
              </div>

              <input
                id="daily-chars"
                type="range"
                min={300}
                max={20000}
                step={100}
                value={dailyChars}
                onChange={(e) => setDailyChars(Number(e.target.value))}
                className="mt-6 w-full accent-vermilion"
                aria-valuetext={`${dailyChars} 字`}
              />
              <div className="mt-2 flex justify-between font-mono text-xs text-ink-faint">
                <span>300 字 · 轻量</span>
                <span>20,000 字 · 重度</span>
              </div>

              <p className="mt-4 text-sm text-ink-soft">
                约 <strong className="text-ink tabular">{calc.minutesPerDay}</strong> 分钟语音 / 天
              </p>

              <div className="rule-dashed my-6" />

              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-ink-soft">语音识别（听写）</dt>
                  <dd className="font-mono font-semibold whitespace-nowrap tabular">¥{fmt(calc.speechCost)}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-ink-soft">文本模型</dt>
                  <dd className="font-mono font-semibold whitespace-nowrap tabular">¥{fmt(calc.textCost)}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-ink/15 pt-3">
                  <dt className="text-base font-bold">UnTypo 月度估算</dt>
                  <dd className="font-display text-3xl font-extrabold text-vermilion tabular">
                    ¥{fmt(calc.total)}
                  </dd>
                </div>
              </dl>

              <p className="mt-4 text-xs leading-relaxed text-ink-faint">
                * 估算基于阿里云百炼公开价格而得，实际支出以你自己选择的供应商和模型价格为准。
              </p>
            </div>
          </Reveal>

          {/* comparison */}
          <Reveal delay={120} className="min-w-0">
            <div className="flex h-full flex-col justify-between rounded-2xl border-[1.5px] border-ink bg-ink p-6 text-paper shadow-card sm:p-8">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-xs tracking-[0.25em] text-paper/50 uppercase">对比 Typeless Pro</p>
                  <div className="flex rounded-lg border border-paper/25 p-0.5" role="group" aria-label="Typeless 付费方式">
                    {(Object.keys(TYPELESS_PLANS) as PlanKey[]).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setPlan(key)}
                        aria-pressed={plan === key}
                        className={`rounded-md px-3 py-1 font-mono text-xs font-semibold transition-colors ${
                          plan === key ? 'bg-vermilion text-paper' : 'text-paper/60 hover:text-paper'
                        }`}
                      >
                        {TYPELESS_PLANS[key].label} ${TYPELESS_PLANS[key].usd}/月
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-6">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-paper/80">UnTypo（按量）</span>
                      <span className="font-display text-2xl font-extrabold text-vermilion tabular">
                        ¥{fmt(calc.total)}
                      </span>
                    </div>
                    <div className="mt-2 h-3 overflow-hidden rounded-full bg-paper/15">
                      <div
                        className="h-full rounded-full bg-vermilion transition-all duration-500"
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-paper/80">Typeless Pro（订阅）</span>
                      <span className="font-display text-2xl font-extrabold text-paper tabular">
                        ¥{Math.round(calc.typelessCny)}
                      </span>
                    </div>
                    <div className="mt-2 h-3 overflow-hidden rounded-full bg-paper/15">
                      <div className="h-full w-full rounded-full bg-paper/60" />
                    </div>
                    <p className="mt-1.5 font-mono text-[11px] text-paper/45">
                      {plan === 'yearly' ? '按年付费折算 $12/月' : '按月付费 $30/月'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-moss/50 bg-moss/20 p-5">
                <p className="text-sm leading-relaxed text-paper/85">
                  在这个用量下，相比 Typeless Pro（{TYPELESS_PLANS[plan].label}）你每月大约省下{' '}
                  <strong className="font-display text-xl font-extrabold text-[#8fc7a4] tabular">
                    ¥{fmt(Math.max(0, calc.saved))}
                  </strong>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
