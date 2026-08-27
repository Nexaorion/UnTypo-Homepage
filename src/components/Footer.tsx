const REPO = 'https://github.com/Nexaorion/UnTypo'

const FOOTER_LINKS = [
  { label: '下载 Releases', href: `${REPO}/releases` },
  { label: 'Issues', href: `${REPO}/issues` },
  { label: 'Pull Requests', href: `${REPO}/pulls` },
  { label: '源代码', href: REPO },
]

export function Footer() {
  return (
    <footer className="bg-night py-12 text-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src="/untypo-icon.svg"
              alt="UnTypo logo"
              className="h-9 w-9 rounded-[10px] border-[1.5px] border-paper/30"
            />
            <span className="font-display text-xl font-extrabold tracking-tight">
              Un<span className="text-vermilion">Typo</span>
            </span>
          </a>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-paper/60 transition-colors hover:text-vermilion"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Zero typing, zero typos. · 由社区以开源方式构建，灵感来自 Typeless 一类优秀的听写产品，但控制权属于每一个用户。
          </p>
          <p className="font-mono whitespace-nowrap">© 2026 Nexaorion / UnTypo</p>
        </div>
      </div>
    </footer>
  )
}
