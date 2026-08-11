import { skillCategories } from '../data/skills'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { CodeIcon } from './Icons'

const accentClasses = {
  violet: 'border-violet/30 hover:border-violet/60 hover:shadow-glow-violet',
  blue: 'border-blue/30 hover:border-blue/60 hover:shadow-glow-blue',
  cyan: 'border-cyan/30 hover:border-cyan/60 hover:shadow-glow-cyan',
  emerald: 'border-emerald/30 hover:border-emerald/60 hover:shadow-glow-emerald',
  amber: 'border-amber/30 hover:border-amber/60 hover:shadow-glow-amber',
}

const dotClasses = {
  violet: 'bg-violet',
  blue: 'bg-blue',
  cyan: 'bg-cyan',
  emerald: 'bg-emerald',
  amber: 'bg-amber',
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-base2/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="cat skills.js"
          title="Skills & Technologies"
          icon={CodeIcon}
          accent="cyan"
          description="Languages and tools I use to design, build, and ship full-stack applications."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 60}>
              <div
                className={`h-full rounded-2xl border bg-card p-5 shadow-card transition-all ${accentClasses[category.accent]}`}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-text">
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-elevated px-3 py-1.5 text-xs font-medium text-muted"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${dotClasses[category.accent]}`}
                        aria-hidden="true"
                      />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
