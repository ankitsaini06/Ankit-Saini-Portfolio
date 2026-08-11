import { profile } from '../data/profile'
import { socialLinks } from '../data/socialLinks'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const quickLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const hasGithub = Boolean(socialLinks.github)
  const hasLinkedin = Boolean(socialLinks.linkedin)
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-mono text-sm font-semibold text-text">{profile.name}</p>
            <p className="text-xs text-muted">{profile.headline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {quickLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-xs font-medium text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={hasGithub ? socialLinks.github : undefined}
              target={hasGithub ? '_blank' : undefined}
              rel={hasGithub ? 'noreferrer' : undefined}
              aria-disabled={!hasGithub}
              onClick={(e) => !hasGithub && e.preventDefault()}
              title={hasGithub ? 'GitHub' : 'GitHub link coming soon'}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors ${
                hasGithub ? 'hover:text-text hover:border-violet/60' : 'cursor-not-allowed opacity-40'
              }`}
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={hasLinkedin ? socialLinks.linkedin : undefined}
              target={hasLinkedin ? '_blank' : undefined}
              rel={hasLinkedin ? 'noreferrer' : undefined}
              aria-disabled={!hasLinkedin}
              onClick={(e) => !hasLinkedin && e.preventDefault()}
              title={hasLinkedin ? 'LinkedIn' : 'LinkedIn link coming soon'}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors ${
                hasLinkedin ? 'hover:text-text hover:border-blue/60' : 'cursor-not-allowed opacity-40'
              }`}
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              title="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-text hover:border-cyan/60"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center font-mono text-xs text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
