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
                按住快捷键说话，松开后，润色好的文字回到你正在输入的地方。
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
                  免费下载 v0.1.3
                </a>
                <a
                  href="https://github.com/Nexaorion/UnTypo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-ink bg-paper-card px-6 py-3.5 text-base font-bold shadow-key transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-key-pressed"
                >
                  看源代码
                  <span aria-hidden>→</span>
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
                  <Keycap tone="vermilion">长按说话</Keycap>
                </span>
                <span className="hidden h-4 w-px bg-ink/20 sm:block" aria-hidden />
                <span>
                  支持 <span className="font-semibold text-ink">Windows x64</span> · 免费，无账号，无订阅
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div
              aria-hidden
              className="absolute -top-6 -right-4 z-10 hidden rotate-6 rounded-lg border-[1.5px] border-ink bg-amberish px-3 py-1.5 font-mono text-xs font-semibold text-night shadow-key sm:block"
              style={{ ['--tilt' as never]: '6deg' }}
            >
              <span className="float-slow inline-block">无需账号 ✦ 即下即用</span>
            </div>
            <DictationDemo />
            <p className="mt-3 text-center font-mono text-xs text-ink-faint">
              ↑ 真实工作流动画演示 · 转写 / 翻译 / 指令三种模式轮播
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-16">
          <div className="grid gap-4 rounded-2xl border-[1.5px] border-ink bg-paper-card p-6 shadow-card sm:grid-cols-3 sm:p-7">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-extrabold tabular sm:text-5xl">~45</span>
              <span className="text-sm leading-snug text-ink-soft">
                字/分钟
                <br />
                <span className="text-ink-faint">键盘打字（平均）</span>
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-extrabold text-vermilion tabular sm:text-5xl">200+</span>
              <span className="text-sm leading-snug text-ink-soft">
                字/分钟
                <br />
                <span className="text-ink-faint">自然说话的速度</span>
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-extrabold text-moss tabular sm:text-5xl">¥0</span>
              <span className="text-sm leading-snug text-ink-soft">
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
