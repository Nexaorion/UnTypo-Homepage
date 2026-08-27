import { Keycap } from './Keycap'
import { Reveal } from './Reveal'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-vermilion py-20 text-paper sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 47px, #191713 47px 48px)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs font-semibold tracking-[0.3em] uppercase text-paper/70">
            现在就开始
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-6xl">
            下一次想打字的时候，
            <br />
            试着说出来。
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-paper/90">
            <Keycap className="border-paper/80 bg-transparent text-paper shadow-[0_3px_0_0_rgba(245,240,227,0.9)]">
              Ctrl
            </Keycap>
            <span aria-hidden>+</span>
            <Keycap className="border-paper/80 bg-transparent text-paper shadow-[0_3px_0_0_rgba(245,240,227,0.9)]">
              Alt
            </Keycap>
            <span aria-hidden>+</span>
            <Keycap className="border-paper/80 bg-paper text-vermilion shadow-[0_3px_0_0_rgba(25,23,19,0.55)]">
              短按说话
            </Keycap>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/Nexaorion/UnTypo/releases/latest"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border-[1.5px] border-night bg-night px-7 py-4 text-base font-bold text-paper shadow-[0_3px_0_0_rgba(25,23,19,0.45)] transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              下载 UnTypo v0.1.3
            </a>
            <a
              href="https://github.com/Nexaorion/UnTypo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-paper/80 px-7 py-4 text-base font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-paper/10"
            >
              前往 GitHub <span aria-hidden>↗</span>
            </a>
          </div>
          <p className="mt-5 font-mono text-xs text-paper/65">Windows x64 · 免费开源 · 无需账号</p>
        </Reveal>
      </div>
    </section>
  )
}
