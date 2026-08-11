import { education } from '../data/education'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          description="My educational journey and academic background."
          accent="blue"
        />

        <div className="relative mt-16 pl-8">
          <div
            className="absolute bottom-0 left-[7px] top-1 w-px bg-gradient-to-b from-blue via-border to-transparent"
            aria-hidden="true"
          />

          {education.map((entry, index) => (
            <Reveal
              key={entry.id}
              delay={index * 100}
              className="relative mb-6 last:mb-0"
            >
              <span
                className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-blue bg-base"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              </span>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-card transition-colors hover:border-blue/50">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-text">
                    {entry.degree}
                  </h3>

                  {entry.current ? (
                    <span className="rounded-full bg-emerald-soft px-2.5 py-1 font-mono text-[11px] text-emerald">
                      In Progress
                    </span>
                  ) : (
                    <span className="rounded-full bg-emerald-soft px-2.5 py-1 font-mono text-[11px] text-emerald">
                      Passed
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm text-muted">
                  {entry.institute}
                </p>

                <p className="mt-0.5 text-xs text-muted">
                  {entry.affiliation}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-md border border-border bg-elevated px-2.5 py-1 font-mono text-xs text-blue">
                    {entry.period}
                  </span>

                  {entry.score && (
                    <span className="rounded-md border border-border bg-elevated px-2.5 py-1 font-mono text-xs text-text">
                      {entry.score}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}