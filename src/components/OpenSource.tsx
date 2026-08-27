import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const REPO = 'https://github.com/Nexaorion/UnTypo'

const CONTRIBUTION_PATHS = [
  {
    step: '01',
    title: '提一个 Issue',
    description: '遇到 bug、想加功能，或者只是觉得哪句话不顺口——都欢迎在 Issues 里说。',
    href: `${REPO}/issues`,
    action: '去提 Issue',
  },
  {
    step: '02',
    title: '发起 Pull Request',
    description: '代码库是 TypeScript + Electron，结构清晰。修一个 bug、补一个供应商适配，都是实在的贡献。',
    href: `${REPO}/pulls`,
    action: '去看代码',
  },
  {
    step: '03',
    title: '给一颗 Star',
    description: '最轻量的支持方式。星标让更多人发现：听写工具可以是开源、免费、本地优先的。',
    href: REPO,
    action: '去点 Star',
  },
]

export function OpenSource() {
  return (
    <section id="open-source" className="relative overflow-hidden border-y-[1.5px] border-ink/12 bg-paper-deep/50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <SectionHeading
              eyebrow="Open Source · 开源"
              title={
                <>
                  代码摊开在阳光下，
                  <br />
                  人人可以查验
                </>
              }
              description="闭源工具说「我们不会看你的数据」，你只能选择相信。开源工具把这句话变成可以审计的事实——每一行处理你语音的代码，都在仓库里。"
            />

            <Reveal delay={150}>
              <div className="mt-10 rounded-2xl border-[1.5px] border-ink bg-night p-5 font-mono text-sm text-paper shadow-card sm:p-6">
                <p className="text-paper/45"># 克隆下来看看</p>
                <p className="mt-2 overflow-x-auto whitespace-nowrap">
                  <span className="text-vermilion">$</span> git clone{' '}
                  <span className="text-[#8fc7a4]">https://github.com/Nexaorion/UnTypo.git</span>
                </p>
                <p className="mt-3 overflow-x-auto whitespace-nowrap">
                  <span className="text-vermilion">$</span> npm install <span className="text-paper/40">&&</span> npm
                  run dev
                </p>
                <p className="mt-3 text-paper/45">
                  # TypeScript · Electron · Vite
                  <span className="caret ml-1" aria-hidden />
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <a
                href={REPO}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 rounded-xl border-[1.5px] border-ink bg-paper-card px-6 py-3.5 text-base font-bold shadow-key transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-key-pressed"
              >
                <svg viewBox="0 0 16 16" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
                Nexaorion / UnTypo
                <span aria-hidden>↗</span>
              </a>
            </Reveal>
          </div>

          {/* contribution paths */}
          <div className="space-y-5">
            {CONTRIBUTION_PATHS.map((path, i) => (
              <Reveal key={path.step} delay={i * 110}>
                <a
                  href={path.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-5 rounded-2xl border-[1.5px] border-ink bg-paper-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="font-display text-3xl font-extrabold text-vermilion/35 tabular transition-colors group-hover:text-vermilion">
                    {path.step}
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-display text-lg font-bold">{path.title}</span>
                      <span className="font-mono text-xs font-semibold whitespace-nowrap text-vermilion opacity-0 transition-opacity group-hover:opacity-100">
                        {path.action} →
                      </span>
                    </span>
                    <span className="mt-1.5 block text-[15px] leading-relaxed text-ink-soft">{path.description}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Reveal delay={120} className="min-w-0">
            <div className="h-full rounded-2xl border-[1.5px] border-ink bg-paper-card p-6 shadow-card">
              <span className="inline-block rounded-full border-[1.5px] border-ink bg-amberish/25 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-ink">
                COMING SOON
              </span>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight">UnTypo Cloud</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                我们正在筹划 UnTypo Cloud：一个可选的 All-in-one
                订阅/计费方案，免去自己配置模型供应商的麻烦。它永远只是
                <strong className="font-semibold text-ink">可选项</strong>
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="min-w-0">
            <div className="flex h-full flex-col justify-between rounded-2xl border-[1.5px] border-dashed border-ink/40 p-6">
              <p className="text-[15px] leading-relaxed text-ink-soft">
                <strong className="font-semibold text-ink">早期项目，诚实告知：</strong>
                UnTypo 目前处于 0.1.x 早期开发阶段，由社区驱动。现在加入，你的每一个 Issue 和 PR
                都会直接塑造它的样子。
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
