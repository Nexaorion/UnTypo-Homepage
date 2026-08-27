import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

interface Feature {
  icon: ReactNode
  title: string
  description: string
  tag?: string
}

const iconProps = {
  className: 'h-6 w-6',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

const FEATURES: Feature[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8.5 21h7" />
      </svg>
    ),
    title: '按住就说，松开就写',
    description:
      '全局快捷键唤起听写，语音活动检测自动断句。松开按键后，结果输入到你刚才正在打字的光标处——思路不断，手不用停。',
    tag: '核心体验',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M4 7h16M4 12h10M4 17h13" />
        <path d="M17.5 10.5 21 14l-3.5 3.5" />
      </svg>
    ),
    title: '不止转写，还会办事',
    description:
      '口述内容会被识别为普通转写、翻译请求或内容指令三种模式：润色措辞、翻译成目标语言，或直接按你的口述生成邮件、回复与清单。',
    tag: '三种模式',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M4 19V5a1 1 0 0 1 1-1h9l5 5v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
        <path d="M14 4v5h5M8 13h8M8 16h5" />
      </svg>
    ),
    title: '专有名词不再听错',
    description:
      '把人名、产品名、专业术语加进个人词典，它们会作为转写提示发给模型。还可以配置姓名、称呼和签名，让生成结果更像你写的。',
    tag: '个人词典',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M7 8h10M7 12h6" />
        <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
        <path d="M16.5 15.5h1.5a1.5 1.5 0 0 1 0 3h-4" />
      </svg>
    ),
    title: '模型配置随你组合',
    description:
      '内置阿里云百炼、OpenAI、OpenAI 兼容接口与 Anthropic 支持，可为不同角色保存多套配置。今天用便宜的，明天换更强的，随时切换。',
    tag: '多供应商',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M12 3 4.5 6v5c0 4.5 3 8.5 7.5 10 4.5-1.5 7.5-5.5 7.5-10V6L12 3Z" />
        <path d="m9 12 2 2 4-4.5" />
      </svg>
    ),
    title: '历史留不留，你说了算',
    description:
      '历史记录保存在本机 SQLite，可查看、可复制、可一键清空；也能完全关闭记录，或设置自动保留天数。',
    tag: '记录可控',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2.5" />
      </svg>
    ),
    title: '密钥加密，只存本地',
    description:
      'API Key 与个人资料经系统级加密后才落到本地磁盘，没有账号体系，没有云端同步——连开发者自己都读不到你的密钥。',
    tag: '本地加密',
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Features · 特性"
          title={
            <>
              打字这件事，
              <span className="scribble">交给嘴</span>
            </>
          }
          description="UnTypo 把「语音 → 文字 → 光标」整条链路做进一个轻量桌面应用里。没有浏览器插件，没有后台服务，打开就用。"
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal as="li" key={feature.title} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col rounded-2xl border-[1.5px] border-ink bg-paper-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border-[1.5px] border-ink bg-paper text-ink transition-colors group-hover:bg-vermilion group-hover:text-paper">
                    {feature.icon}
                  </span>
                  {feature.tag ? (
                    <span className="rounded-full border border-ink/25 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide text-ink-faint">
                      {feature.tag}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{feature.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
