import { useState } from 'react'
import { profile } from '../data/profile'
import { socialLinks } from '../data/socialLinks'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import {
  MailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
  CopyIcon,
  CheckIcon,
  ArrowRightIcon,
} from './Icons'

const contactCards = [
  { icon: MailIcon, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: PhoneIcon, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const hasEmail = Boolean(profile.email)
  const hasGithub = Boolean(socialLinks.github)
  const hasLinkedin = Boolean(socialLinks.linkedin)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCopyEmail = async () => {
    if (!hasEmail) return
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!hasEmail) return

    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || 'Anonymous'} (${form.email || 'no email provided'})`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative bg-base2/40 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="./contact.sh"
          title="Let's Connect"
          icon={MailIcon}
          accent="cyan"
          description="Open to internship and full-time opportunities — reach out directly or send a message below."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={80} className="space-y-4">
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-colors hover:border-cyan/50"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-soft text-cyan">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-xs font-mono uppercase tracking-wide text-muted">
                    {label}
                  </span>
                  <span className="block text-sm font-medium text-text">{value}</span>
                </span>
              </a>
            ))}

            <button
              type="button"
              onClick={handleCopyEmail}
              disabled={!hasEmail}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card p-3 text-sm font-medium text-muted transition-colors hover:border-violet/50 hover:text-text disabled:cursor-not-allowed disabled:opacity-40"
            >
              {copied ? <CheckIcon className="h-4 w-4 text-emerald" /> : <CopyIcon className="h-4 w-4" />}
              {copied ? 'Email copied' : 'Copy email address'}
            </button>

            <div className="flex gap-3 pt-1">
              <a
                href={hasGithub ? socialLinks.github : undefined}
                target={hasGithub ? '_blank' : undefined}
                rel={hasGithub ? 'noreferrer' : undefined}
                aria-disabled={!hasGithub}
                onClick={(e) => !hasGithub && e.preventDefault()}
                title={hasGithub ? 'GitHub' : 'GitHub link coming soon'}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors ${
                  hasGithub ? 'hover:text-text hover:border-violet/60' : 'cursor-not-allowed opacity-40'
                }`}
              >
                <GithubIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={hasLinkedin ? socialLinks.linkedin : undefined}
                target={hasLinkedin ? '_blank' : undefined}
                rel={hasLinkedin ? 'noreferrer' : undefined}
                aria-disabled={!hasLinkedin}
                onClick={(e) => !hasLinkedin && e.preventDefault()}
                title={hasLinkedin ? 'LinkedIn' : 'LinkedIn link coming soon'}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors ${
                  hasLinkedin ? 'hover:text-text hover:border-blue/60' : 'cursor-not-allowed opacity-40'
                }`}
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wide text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full rounded-xl border border-border bg-elevated px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-violet"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wide text-muted">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full rounded-xl border border-border bg-elevated px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-violet"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wide text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-border bg-elevated px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-violet"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wide text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full resize-none rounded-xl border border-border bg-elevated px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-violet"
                />
              </div>

              <button
                type="submit"
                disabled={!hasEmail}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-cyan px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send Message
                <ArrowRightIcon className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-xs text-muted">
                Opens your email app with this message pre-filled — no backend involved.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
