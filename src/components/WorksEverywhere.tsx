import { Icon } from '@iconify/react'
import { Reveal } from './Reveal'

interface AppItem {
  name: string
  icon?: string
  iconify?: string
  glyph?: string
  color?: string
  generic?: boolean
}

const APPS_ROW_A: AppItem[] = [
  { name: '微信', icon: '/app-icons/wechat.png' },
  { name: '钉钉', icon: '/app-icons/dingtalk.png' },
  { name: '飞书', icon: '/app-icons/feishu.png' },
  { name: '企业微信', icon: '/app-icons/wecom.png' },
  { name: 'QQ', icon: '/app-icons/qq.png' },
  { name: 'Telegram', iconify: 'logos:telegram' },
  { name: 'Slack', iconify: 'logos:slack-icon' },
  { name: 'Outlook', iconify: 'logos:microsoft-outlook' },
  { name: 'Foxmail', icon: '/app-icons/foxmail.png' },
  { name: 'Gmail', iconify: 'logos:gmail' },
  { name: 'Discord', iconify: 'logos:discord-icon' },
  { name: 'WhatsApp', iconify: 'logos:whatsapp-icon' },
  { name: 'Teams', iconify: 'logos:microsoft-teams' },
  { name: 'Zoom', iconify: 'logos:zoom-icon' },
  { name: '腾讯会议', glyph: '会', color: '#006EFF' },
  { name: 'LINE', iconify: 'logos:line' },
  { name: 'Messenger', iconify: 'logos:messenger' },
]
const APPS_ROW_B: AppItem[] = [
  { name: 'Word', iconify: 'logos:microsoft-word' },
  { name: 'WPS', icon: '/app-icons/wps.png' },
  { name: 'Notion', iconify: 'logos:notion-icon' },
  { name: 'Obsidian', iconify: 'logos:obsidian-icon' },
  { name: 'VS Code', iconify: 'logos:visual-studio-code' },
  { name: 'Cursor', icon: '/app-icons/cursor.png' },
  { name: 'Pages', glyph: 'P', color: '#F09C37' },
  { name: 'Google Docs', iconify: 'logos:google-docs' },
  { name: 'Typora', glyph: 'T', color: '#2D2D2D' },
  { name: 'Sublime Text', iconify: 'logos:sublime-text' },
  { name: 'IntelliJ IDEA', iconify: 'logos:intellij-idea' },
  { name: 'Xcode', iconify: 'logos:xcode' },
  { name: '浏览器表单', generic: true },
  { name: '记事本', generic: true },
  { name: '任意输入框', generic: true },
  { name: '备忘录', generic: true },
]

function GlyphFallback({ app }: { app: AppItem }) {
  return (
    <span
      className="grid h-5 w-5 place-items-center rounded-[5px] font-display text-[11px] font-extrabold text-white"
      style={{ backgroundColor: app.color ?? '#2b579a' }}
    >
      {app.glyph}
    </span>
  )
}

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
  if (app.iconify) {
    return (
      <Icon
        icon={app.iconify}
        width={20}
        height={20}
        className="h-5 w-5"
        fallback={app.glyph ? <GlyphFallback app={app} /> : undefined}
      />
    )
  }
  if (app.glyph) {
    return <GlyphFallback app={app} />
  }
  return (
    <span className="grid h-5 w-5 place-items-center rounded-[5px] border-[1.5px] border-dashed border-ink/40 text-ink-faint">
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M2 4.5h8M2 4.5V10h8V4.5M4.5 4.5V3a1.5 1.5 0 0 1 3 0v1.5" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function buildTrack(items: AppItem[], minItems = 24) {
  const copies = Math.max(2, Math.ceil(minItems / items.length))
  const track: AppItem[] = []
  for (let i = 0; i < copies; i++) {
    track.push(...items)
  }
  return { track, copies }
}

function ChipRow({ items, reverse = false, duration }: { items: AppItem[]; reverse?: boolean; duration: string }) {
  const { track, copies } = buildTrack(items, 24)
  const translate = `${-((copies - 1) / copies) * 100}%`
  return (
    <div className="marquee overflow-hidden" aria-hidden={reverse ? true : undefined}>
      <div
        className={`marquee-track gap-3 py-2 ${reverse ? 'reverse' : ''}`}
        style={{
          ['--marquee-duration' as never]: duration,
          ['--marquee-translate' as never]: translate,
        }}
      >
        {track.map((app, i) => (
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
