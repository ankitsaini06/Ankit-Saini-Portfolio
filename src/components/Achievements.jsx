import { achievements } from '../data/achievements'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { AwardIcon } from './Icons'

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-base2/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="cat achievements.log"
          title="Achievements"
          icon={AwardIcon}
          accent="amber"
        />

        {achievements.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, index) => (
              <Reveal key={item.id} delay={index * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-amber/30 bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-glow-amber">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-soft text-amber">
                    <AwardIcon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-text">{item.title}</h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={80}>
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-8">
              <p className="text-center text-sm text-muted">
                No verified achievements yet — this section will update as milestones are reached.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-amber/30 bg-amber-soft px-3 py-1.5 text-xs font-medium text-amber"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
