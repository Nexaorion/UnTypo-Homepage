import { useState } from 'react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const FAQS = [
  {
    q: 'UnTypo 是免费的吗？',
    a: '软件本身完全免费且开源，没有订阅、没有内购、没有账号。你唯一的开销是自己配置的模型供应商产生的调用费用——按量计费，用多少付多少。未来可选的 UnTypo Cloud 也不会改变这一点。',
  },
  {
    q: '支持哪些平台和模型？',
    a: '目前支持 Windows x64。模型侧内置阿里云百炼（语音识别）、OpenAI、OpenAI 兼容接口和 Anthropic（文本处理），可以为不同角色保存多套配置，随时切换。',
  },
  {
    q: '我的录音会被上传吗？',
    a: '录音、转写文本和词典提示会发送给你自己配置的模型供应商——语音识别必须由模型完成。但 UnTypo 本身没有任何服务器，不经手、不存储你的任何数据；配置和历史全部留在本机。',
  },
  {
    q: '和 Typeless 这类商业产品相比如何？',
    a: '核心体验相似：全局快捷键听写、智能润色、随处输入。区别在于控制权——UnTypo 开源可审计、模型自选、费用自理、数据本地保存，没有每周字数上限，也不需要把使用习惯交给任何公司的云端。',
  },
  {
    q: '还在早期阶段，现在适合用吗？',
    a: '适合尝鲜和轻度使用。0.1.x 版本功能迭代很快，建议关注 Releases 页面的更新。如果遇到 bug，欢迎提 Issue——这正是开源项目变好的方式。',
  },
  {
    q: 'UnTypo Cloud 是什么？会收费吗？',
    a: 'Cloud 是规划中的可选 All-in-one 订阅/计费方案：不想自己配置模型供应商时，接入它即可开箱即用。它永远只是可选项，不接入也完全不影响使用。',
  },
  {
    q: '我可以参与开发吗？',
    a: '非常欢迎。代码库基于 TypeScript + Electron + Vite，从修 bug、补模型适配到完善文档都是贡献。也可以先点一颗 Star，让更多人看到它。',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="FAQ · 常见问题"
          title="你可能想问"
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const open = openIndex === i
            return (
              <Reveal key={faq.q} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-xl border-[1.5px] transition-colors ${
                    open ? 'border-ink bg-paper-card shadow-card' : 'border-ink/25 bg-paper-card/60'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-base font-bold sm:text-lg">{faq.q}</span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-[1.5px] border-ink transition-transform duration-300 ${
                        open ? 'rotate-45 bg-vermilion text-paper' : ''
                      }`}
                      aria-hidden
                    >
                      <svg viewBox="0 0 14 14" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 1v12M1 7h12" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-soft">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
