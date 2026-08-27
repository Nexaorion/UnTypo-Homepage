import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#demo', label: '演示' },
  { href: '#features', label: '特性' },
  { href: '#privacy', label: '本地优先' },
  { href: '#cost', label: '成本' },
  { href: '#open-source', label: '开源' },
  { href: '#faq', label: 'FAQ' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 shadow-[0_1px_0_rgba(35,32,26,0.12)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <img
            src="/untypo-icon.svg"
            alt="UnTypo logo"
            className="h-9 w-9 rounded-[10px] border-[1.5px] border-ink shadow-key transition-transform group-hover:-translate-y-0.5"
          />
          <span className="font-display text-xl font-extrabold tracking-tight">
            Un<span className="text-vermilion">Typo</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-vermilion"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/Nexaorion/UnTypo"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border-[1.5px] border-ink px-3.5 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-key"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://github.com/Nexaorion/UnTypo/releases/latest"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border-[1.5px] border-ink bg-vermilion px-4 py-2 text-sm font-bold text-paper shadow-key transition-all hover:-translate-y-0.5 hover:bg-vermilion-deep active:translate-y-0.5 active:shadow-key-pressed"
          >
            免费下载
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border-[1.5px] border-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? '关闭菜单' : '打开菜单'}
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-ink/10 bg-paper px-5 pt-2 pb-5 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-soft hover:bg-paper-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/Nexaorion/UnTypo/releases/latest"
            target="_blank"
            rel="noreferrer"
            className="mt-3 block rounded-lg border-[1.5px] border-ink bg-vermilion px-4 py-2.5 text-center text-sm font-bold text-paper shadow-key"
          >
            免费下载
          </a>
        </div>
      ) : null}
    </header>
  )
}
