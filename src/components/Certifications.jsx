import { certifications } from '../data/certifications'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { BadgeIcon, ExternalLinkIcon } from './Icons'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="ls certifications/"
          title="Certifications"
          icon={BadgeIcon}
          accent="violet"
        />

        {certifications.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <Reveal key={cert.id} delay={index * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-violet/50 hover:shadow-glow-violet">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-soft text-violet">
                    <BadgeIcon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-text">{cert.name}</h3>
                  <p className="mt-1 text-xs text-muted">
                  {cert.issuer}
                  </p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-violet transition-colors hover:text-cyan"
                    >
                      View Certificate
                      <ExternalLinkIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={80}>
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-8 text-center">
              <p className="text-sm text-muted">
                Certificates will appear here as they're earned and verified.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
