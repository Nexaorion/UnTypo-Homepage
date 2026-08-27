import { Reveal } from './Reveal'

interface AppItem {
  name: string
  icon?: string
  glyph?: string
  generic?: boolean
}

const APPS_ROW_A: AppItem[] = [
  { name: '微信', icon: '/app-icons/wechat.png' },
  { name: '钉钉', icon: '/app-icons/dingtalk.png' },
  { name: '飞书', icon: '/app-icons/feishu.png' },
  { name: '企业微信', icon: '/app-icons/wecom.png' },
  { name: 'QQ', icon: '/app-icons/qq.png' },
  { name: 'Telegram', icon: '/app-icons/telegram.png' },
  { name: 'Slack', icon: '/app-icons/slack.png' },
  { name: 'Outlook', icon: '/app-icons/outlook.png' },
  { name: 'Foxmail', icon: '/app-icons/foxmail.png' },
]
const APPS_ROW_B: AppItem[] = [
  { name: 'Word', glyph: 'W' },
  { name: 'WPS', icon: '/app-icons/wps.png' },
  { name: 'Notion', icon: '/app-icons/notion.png' },
  { name: 'Obsidian', icon: '/app-icons/obsidian.png' },
  { name: 'VS Code', icon: '/app-icons/vscode.png' },
  { name: 'Cursor', icon: '/app-icons/cursor.png' },
  { name: '浏览器表单', generic: true },
  { name: '记事本', generic: true },
  { name: '任意输入框', generic: true },
]

function AppIcon({ app }: { app: AppItem }) {
  if (app.icon) {
    return (
      <img
        src={app.icon}
        alt=""
        width={20}
        height={20}
        className="h-5 w-5 rounded-[5px]"
        loading="lazy"
      />
    )
  }
  if (app.glyph) {
    return (
      <span className="grid h-5 w-5 place-items-center rounded-[5px] bg-[#2b579a] font-display text-[11px] font-extrabold text-white">
        {app.glyph}
      </span>
    )
  }
  return (
    <span className="grid h-5 w-5 place-items-center rounded-[5px] border-[1.5px] border-dashed border-ink/40 text-ink-faint">
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M2 4.5h8M2 4.5V10h8V4.5M4.5 4.5V3a1.5 1.5 0 0 1 3 0v1.5" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function ChipRow({ items, reverse = false, duration }: { items: AppItem[]; reverse?: boolean; duration: string }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee overflow-hidden" aria-hidden={reverse ? true : undefined}>
      <div
        className={`marquee-track gap-3 py-2 ${reverse ? 'reverse' : ''}`}
        style={{ ['--marquee-duration' as never]: duration }}
      >
        {doubled.map((app, i) => (
          <span
            key={`${app.name}-${i}`}
            className="inline-flex items-center gap-2.5 rounded-lg border-[1.5px] border-ink/70 bg-paper-card px-4 py-2 font-mono text-sm font-semibold whitespace-nowrap text-ink shadow-key"
          >
            <AppIcon app={app} />
            {app.name}
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
        </Reveal>
      </div>
      <div className="space-y-3">
        <ChipRow items={APPS_ROW_A} duration="34s" />
        <ChipRow items={APPS_ROW_B} duration="42s" reverse />
      </div>
    </section>
  )
}
