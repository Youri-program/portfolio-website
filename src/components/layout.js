import Link from 'next/link'
import { useRouter } from 'next/router'

const navLinks = [
  { href: '/',        label: 'Home'     },
  { href: '/about',   label: 'About'    },
  { href: '/projects',label: 'Projects' },
  { href: '/contact', label: 'Contact'  },
  { href: '/fun',     label: 'Fun'      },
]

export default function Layout({ children }) {
  const { pathname } = useRouter()

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      {/* Nav */}
      <header className="w-full border-b border-border">
        <nav className="max-w-content mx-auto px-6 py-5 flex items-center justify-between">
          {/* Name / logo */}
          <Link href="/" className="font-serif text-heading font-semibold text-base hover:text-accent transition-colors duration-150">
            Youri van der Meulen
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            {navLinks.filter(l => l.href !== '/').map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link ${pathname === href ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1 max-w-content mx-auto px-6 py-16 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-content mx-auto px-6 py-6 flex items-center justify-between">
          <span className="text-muted text-sm">
            © {new Date().getFullYear()} Youri van der Meulen
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Youri-program"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text text-sm transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/youri-van-der-meulen-593180223"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text text-sm transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
