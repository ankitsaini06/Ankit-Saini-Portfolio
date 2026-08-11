import { profile } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { BriefcaseIcon } from './Icons'

export default function Career() {
  return (
    <section id="career" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="cat career.status"
          title="Career Status"
          icon={BriefcaseIcon}
          accent="emerald"
          align="center"
        />

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-emerald/30 bg-card p-8 text-center shadow-glow-emerald">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-soft px-4 py-1.5 font-mono text-sm text-emerald">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              {profile.careerStatus}
            </span>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border bg-elevated px-3.5 py-1.5 text-sm font-medium text-muted"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
