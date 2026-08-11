import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'
import { GithubIcon, ExternalLinkIcon, ArrowRightIcon } from './Icons'

export default function ProjectCard({ project, delay = 0, onViewDetails }) {
  const hasGithub = Boolean(project.github)
  const hasDemo = Boolean(project.demo)

  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-violet/40">
        <div className="relative aspect-video overflow-hidden bg-elevated">
          <ImageWithFallback
            src={project.image}
            alt={`${project.name} preview`}
            fallbackLabel={project.name}
            className="h-full w-full"
            imgClassName="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-base font-semibold text-text">{project.name}</h3>

          <p className="mt-1.5 line-clamp-2 text-sm text-muted">
            {project.tagline}
          </p>

          {project.techStack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-elevated px-2 py-1 text-[11px] font-medium text-muted"
                >
                  {tech}
                </span>
              ))}

              {project.techStack.length > 4 && (
                <span className="rounded-md border border-border bg-elevated px-2 py-1 text-[11px] font-medium text-muted">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
          )}

          <div className="mt-5 flex items-center gap-2 pt-1">
            <a
              href={hasGithub ? project.github : undefined}
              target={hasGithub ? '_blank' : undefined}
              rel={hasGithub ? 'noreferrer' : undefined}
              aria-disabled={!hasGithub}
              title={hasGithub ? 'View source on GitHub' : 'GitHub link coming soon'}
              onClick={(e) => !hasGithub && e.preventDefault()}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors ${
                hasGithub
                  ? 'hover:border-violet/60 hover:text-text'
                  : 'cursor-not-allowed opacity-40'
              }`}
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={hasDemo ? project.demo : undefined}
              target={hasDemo ? '_blank' : undefined}
              rel={hasDemo ? 'noreferrer' : undefined}
              aria-disabled={!hasDemo}
              title={hasDemo ? 'View live demo' : 'Live demo coming soon'}
              onClick={(e) => !hasDemo && e.preventDefault()}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors ${
                hasDemo
                  ? 'hover:border-cyan/60 hover:text-text'
                  : 'cursor-not-allowed opacity-40'
              }`}
            >
              <ExternalLinkIcon className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => onViewDetails(project)}
              className="ml-auto inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold text-violet transition-colors hover:text-cyan"
            >
              View Details
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  )
}