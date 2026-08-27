import { Reveal } from './Reveal'

const APPS_ROW_A = [
  '微信', '钉钉', '飞书', '企业微信', 'QQ', 'Telegram', 'Slack', 'Outlook', 'Foxmail',
]
const APPS_ROW_B = [
  'Word', 'WPS', 'Notion', 'Obsidian', 'VS Code', 'Cursor', '浏览器表单', '记事本', '任意输入框',
]

function ChipRow({ items, reverse = false, duration }: { items: string[]; reverse?: boolean; duration: string }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee overflow-hidden" aria-hidden={reverse ? true : undefined}>
      <div
        className={`marquee-track gap-3 py-2 ${reverse ? 'reverse' : ''}`}
        style={{ ['--marquee-duration' as never]: duration }}
      >
        {doubled.map((app, i) => (
          <span
            key={`${app}-${i}`}
            className="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-ink/70 bg-paper-card px-4 py-2 font-mono text-sm font-semibold whitespace-nowrap text-ink shadow-key"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-vermilion" />
            {app}
          </span>
        ))}
      </div>
    </div>
  )
}

export function WorksEverywhere() {
  return (
    <section className="relative border-y-[1.5px] border-ink/12 bg-paper-deep/50 py-14" aria-label="适用于任意输入框">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            你在哪儿打字，
            <br className="sm:hidden" />
            它就在哪儿工作
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            UnTypo 把结果直接输入到当前光标位置——聊天、写作、填表、写代码，不挑应用，不挑输入框。
          </p>
        </Reveal>
      </div>
      <div className="space-y-3">
        <ChipRow items={APPS_ROW_A} duration="34s" />
        <ChipRow items={APPS_ROW_B} duration="42s" reverse />
      </div>
    </section>
  )
}
