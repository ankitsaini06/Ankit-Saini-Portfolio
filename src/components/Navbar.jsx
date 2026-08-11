import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'
import { MenuIcon, CloseIcon } from './Icons'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'career', label: 'Career' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id))

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-3 sm:px-6">
        <nav
          aria-label="Primary"
          className="glass flex items-center justify-between rounded-2xl border border-border px-3 py-2.5 shadow-card sm:px-4"
        >
          <a
            href="#home"
            className="flex shrink-0 items-center gap-2 rounded-lg px-2 py-1 font-mono text-sm font-semibold text-text"
          >
            <span className="text-violet">~/</span>
            <span>ankit-saini</span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-text' : 'text-muted hover:text-text'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-violet to-cyan transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-violet to-blue px-4 py-2 text-sm font-semibold text-white shadow-glow-violet transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Let&apos;s Connect
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text lg:hidden"
            >
              {isOpen ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
            isOpen ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="glass rounded-2xl border border-border p-3 shadow-card">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeId === link.id
                  return (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={handleLinkClick}
                        aria-current={isActive ? 'true' : undefined}
                        className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-violet-soft text-text'
                            : 'text-muted hover:bg-elevated hover:text-text'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-violet to-blue px-4 py-2.5 text-sm font-semibold text-white"
              >
                Let&apos;s Connect
              </a>
              <p className="mt-3 px-1 text-center text-xs text-muted">{profile.careerStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
