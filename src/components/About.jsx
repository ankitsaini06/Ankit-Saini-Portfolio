import { profile } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { GradCapIcon, MapPinIcon, CodeIcon, UserIcon } from './Icons'

const infoCards = [
  { icon: GradCapIcon, label: 'Degree', value: 'B.Tech, Information Technology', accent: 'violet' },
  { icon: UserIcon, label: 'College', value: profile.college, accent: 'blue' },
  { icon: CodeIcon, label: 'Batch', value: profile.batch, accent: 'cyan' },
  { icon: MapPinIcon, label: 'Location', value: profile.location, accent: 'emerald' },
]

const accentClasses = {
  violet: 'text-violet bg-violet-soft',
  blue: 'text-blue bg-blue-soft',
  cyan: 'text-cyan bg-cyan-soft',
  emerald: 'text-emerald bg-emerald-soft',
}

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="cat about.js"
          title="About Me"
          icon={UserIcon}
          accent="violet"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={80}>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {profile.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="grid grid-cols-1 gap-3 xs:grid-cols-2">
              {infoCards.map(({ icon: Icon, label, value, accent }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-card p-4 shadow-card transition-transform hover:-translate-y-0.5"
                >
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${accentClasses[accent]}`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="mt-3 text-xs font-mono uppercase tracking-wide text-muted">{label}</p>
                  <p className="mt-1 text-sm font-medium text-text">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
