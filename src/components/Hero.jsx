import { profile } from '../data/profile'
import { socialLinks } from '../data/socialLinks'
import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'
import {
  DownloadIcon,
  ArrowRightIcon,
  MailIcon,
} from './Icons'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_320px] lg:gap-16 lg:px-8 lg:py-20">

        <div>
          <Reveal>
            <p className="font-mono text-sm text-emerald">
              $ whoami
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{' '}
              <span className="text-gradient">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 text-xl font-semibold text-text sm:text-2xl">
              {profile.headline}
            </p>

            <p className="mt-1 font-mono text-sm text-muted">
              {profile.subtitle}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-blue px-5 py-3 text-sm font-semibold text-white shadow-glow-violet transition-transform hover:scale-[1.03]"
              >
                View Projects
                <ArrowRightIcon className="h-4 w-4" />
              </a>

              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-cyan/60 hover:text-cyan"
              >
                Download Resume
                <DownloadIcon className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-emerald/60 hover:text-emerald"
              >
                Contact Me
                <MailIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-7 flex flex-wrap items-center gap-2.5">

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/70 hover:bg-blue-soft hover:text-blue"
              >
                LinkedIn
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-violet/70 hover:bg-violet-soft hover:text-violet"
              >
                GitHub
              </a>

              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/70 hover:bg-amber-soft hover:text-amber"
              >
                LeetCode
              </a>

              <a
                href={socialLinks.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald/70 hover:bg-emerald-soft hover:text-emerald"
              >
                HackerRank
              </a>

              <a
                href={socialLinks.gfg}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald/70 hover:bg-emerald-soft hover:text-emerald"
              >
                GeeksforGeeks
              </a>

              <a
                href={socialLinks.codolio}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/70 hover:bg-cyan-soft hover:text-cyan"
              >
                Codolio
              </a>

            </div>
          </Reveal>
        </div>

        <Reveal
          delay={160}
          className="mx-auto w-full max-w-xs lg:mx-0 lg:justify-self-end lg:mt-24"
        >
          <div className="relative">

            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet/20 via-transparent to-cyan/20 blur-xl"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-card">

              <div className="aspect-[4/5] w-full">
                <ImageWithFallback
                  src={profile.profileImage}
                  alt={`${profile.name}, ${profile.headline}`}
                  fallbackLabel="AS"
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover"
                />
              </div>

              <div className="border-t border-border bg-elevated/80 px-4 py-3">
                <p className="flex items-center gap-2 font-mono text-xs text-emerald">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald"
                    aria-hidden="true"
                  />
                  {profile.careerStatus}
                </p>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}