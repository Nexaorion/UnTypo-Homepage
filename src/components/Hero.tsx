import { DictationDemo } from './DictationDemo'
import { Keycap } from './Keycap'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-14 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 47px, rgba(35,32,26,0.07) 47px 48px)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-full w-px bg-vermilion/15"
        style={{ transform: 'translateX(-38vw)' }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink/25 bg-paper-card px-3.5 py-1.5 font-mono text-xs font-semibold tracking-wide text-ink-soft">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-2 w-2 rounded-full bg-moss ping-soft" />
                  <span className="h-2 w-2 rounded-full bg-moss" />
                </span>
                开源 · 本地优先 · Windows 听写工具
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-6 font-display text-[2.9rem] leading-[1.06] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[4.2rem]">
                说出来，
                <br />
                就<ruby className="font-serif italic font-medium text-vermilion">写<rt className="font-body text-[0.32em] font-normal tracking-widest text-vermilion/70 not-italic">xiě</rt></ruby>好了。
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                短按快捷键开始说话，再按一次，润色好的文字回到你正在输入的地方。
                <span className="font-semibold text-ink">模型自己选、费用自己付、数据留在自己的电脑上</span>
                —— 像 Typeless 一样顺滑，但控制权在你手里。
              </p>
            </Reveal>

            <Reveal delay={270}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/Nexaorion/UnTypo/releases/latest"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-xl border-[1.5px] border-ink bg-vermilion px-6 py-3.5 text-base font-bold text-paper shadow-key transition-all hover:-translate-y-0.5 hover:bg-vermilion-deep active:translate-y-0.5 active:shadow-key-pressed"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  免费下载
                </a>
                <a
                  href="https://github.com/Nexaorion/UnTypo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl border-[1.5px] border-ink bg-paper-card px-6 py-3.5 text-base font-bold shadow-key transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-key-pressed"
                >
                  <svg viewBox="0 0 16 16" className="h-5 w-5 fill-current" aria-hidden>
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-ink-soft">
                <span className="flex items-center gap-2">
                  <Keycap>Ctrl</Keycap>
                  <span aria-hidden>+</span>
                  <Keycap>Alt</Keycap>
                  <span aria-hidden>+</span>
                  <Keycap tone="vermilion">短按说话</Keycap>
                </span>
                <span className="hidden h-4 w-px bg-ink/20 sm:block" aria-hidden />
                <span>
                  支持 <span className="font-semibold text-ink">Windows x64</span> · 免费，无账号，无订阅
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative min-w-0">
            <DictationDemo />
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-16 min-w-0">
          <div className="grid gap-6 rounded-2xl border-[1.5px] border-ink bg-paper-card p-6 shadow-card sm:grid-cols-3 sm:gap-4 sm:p-7">
            <div className="flex flex-col items-center text-center">
              <span className="font-display text-4xl font-extrabold tabular sm:text-5xl">~45</span>
              <span className="mt-1 text-sm leading-snug text-ink-soft">
                字/分钟
                <br />
                <span className="text-ink-faint">键盘打字（平均）</span>
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-display text-4xl font-extrabold text-vermilion tabular sm:text-5xl">200+</span>
              <span className="mt-1 text-sm leading-snug text-ink-soft">
                字/分钟
                <br />
                <span className="text-ink-faint">自然说话的速度</span>
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-display text-4xl font-extrabold text-moss tabular sm:text-5xl">¥0</span>
              <span className="mt-1 text-sm leading-snug text-ink-soft">
                软件费用
                <br />
                <span className="text-ink-faint">开源免费，只付你自己的模型账单</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
