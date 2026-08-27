import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const LOCAL_ITEMS = [
  { label: '配置与词典', detail: '保存在当前电脑' },
  { label: '历史记录', detail: '本地 SQLite 数据库' },
  { label: 'API Key 与个人资料', detail: '系统级加密后存储' },
  { label: '账号 / 同步 / 中转服务器', detail: '没有，一个都没有' },
]

export function Privacy() {
  return (
    <section id="privacy" className="relative overflow-hidden bg-night py-24 text-paper sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #f5f0e3 1px, transparent 1px), linear-gradient(to bottom, #f5f0e3 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Local-first · 本地优先"
          title={
            <>
              你的话，
              <span className="text-vermilion">不经过我们</span>
            </>
          }
          description="UnTypo 没有账号、没有云端、没有中转服务器。我们经手不到你的任何东西——这是架构决定的，不是承诺。"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <Reveal>
            <div className="rounded-2xl border border-paper/20 bg-night-soft p-6 sm:p-8">
              <p className="font-mono text-xs tracking-[0.25em] text-paper/50 uppercase">数据流向</p>

              <div className="mt-6 space-y-0">
                {/* you */}
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-[1.5px] border-paper/60 bg-paper text-night">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <circle cx="12" cy="8" r="3.5" />
                      <path d="M5 20c1.2-3.2 3.8-5 7-5s5.8 1.8 7 5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold">你的电脑</p>
                    <p className="text-sm text-paper/60">录音 · 配置 · 词典 · 历史，全部在本地</p>
                  </div>
                </div>

                <div className="ml-6 flex flex-col items-center py-2" aria-hidden>
                  <span className="h-8 w-px bg-gradient-to-b from-vermilion to-vermilion/30" />
                  <span className="font-mono text-[11px] text-vermilion">仅发送：录音 + 词典提示</span>
                  <span className="h-4 w-px bg-vermilion/30" />
                  <svg viewBox="0 0 12 8" className="h-2 w-3 fill-vermilion">
                    <path d="M6 8 0 0h12Z" />
                  </svg>
                </div>

                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-[1.5px] border-vermilion bg-vermilion/15 text-vermilion">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <path d="M12 3 4.5 6v5c0 4.5 3 8.5 7.5 10 4.5-1.5 7.5-5.5 7.5-10V6L12 3Z" strokeLinejoin="round" />
                      <path d="m9 12 2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold">你选择的模型供应商</p>
                    <p className="text-sm text-paper/60">直连官方接口，账单由你掌控</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4 rounded-xl border border-dashed border-paper/25 p-4 opacity-60">
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl border-[1.5px] border-paper/30 text-paper/50">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <rect x="4" y="6" width="16" height="12" rx="2" />
                      <path d="M4 10h16M8 14h4" strokeLinecap="round" />
                    </svg>
                    <span aria-hidden className="absolute inset-0 grid place-items-center">
                      <span className="block h-px w-[130%] rotate-[-24deg] bg-vermilion" />
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-paper/70 line-through decoration-vermilion decoration-2">
                      UnTypo 中转服务器
                    </p>
                    <p className="text-sm text-paper/50">不存在 —— 我们想收也收不到</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <ul className="divide-y divide-paper/12">
              {LOCAL_ITEMS.map((item, i) => (
                <Reveal as="li" key={item.label} delay={i * 80}>
                  <div className="flex items-center justify-between gap-4 py-5">
                    <span className="text-base font-semibold sm:text-lg">{item.label}</span>
                    <span className="rounded-full border border-moss/60 bg-moss/15 px-3 py-1 font-mono text-xs font-semibold text-[#8fc7a4]">
                      {item.detail}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={340}>
              <div className="mt-6 rounded-xl border border-amberish/40 bg-amberish/10 p-5">
                <p className="flex items-start gap-3 text-sm leading-relaxed text-paper/80">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-5 w-5 shrink-0 text-amberish"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M12 4 2.5 20h19L12 4Z" strokeLinejoin="round" />
                    <path d="M12 10v4.5M12 17.5v.5" strokeLinecap="round" />
                  </svg>
                  <span>
                    <strong className="font-semibold text-paper">诚实说明：</strong>
                    录音、转写文本和词典提示仍会发送到你配置的模型服务提供商——语音识别需要模型来处理。
                    UnTypo 的意义在于：发给谁、发多少、留多久，都由你决定。
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
