import { useEffect, useRef } from 'react'
import ImageWithFallback from './ImageWithFallback'
import { CloseIcon, GithubIcon, ExternalLinkIcon } from './Icons'

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!project) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const hasGithub = Boolean(project.github)
  const hasDemo = Boolean(project.demo)

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={handleOverlayClick}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card shadow-card"
      >
        <div className="relative aspect-video overflow-hidden bg-elevated">
          <ImageWithFallback
            src={project.image}
            alt={`${project.name} preview`}
            fallbackLabel={project.name}
            className="h-full w-full"
            imgClassName="h-full w-full object-contain"
          />

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6">
          <span className="font-mono text-xs text-cyan">
            {project.category}
          </span>

          <h3
            id="project-modal-title"
            className="mt-1 text-xl font-bold text-text"
          >
            {project.name}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.tagline}
          </p>

          {project.techStack.length > 0 && (
            <div className="mt-5">
              <h4 className="text-xs font-mono uppercase tracking-wide text-muted">
                Tech Stack
              </h4>

              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-elevated px-2.5 py-1 text-xs font-medium text-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.features.length > 0 && (
            <div className="mt-5">
              <h4 className="text-xs font-mono uppercase tracking-wide text-muted">
                Key Features
              </h4>

              <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={hasGithub ? project.github : undefined}
              target={hasGithub ? '_blank' : undefined}
              rel={hasGithub ? 'noreferrer' : undefined}
              aria-disabled={!hasGithub}
              onClick={(e) => !hasGithub && e.preventDefault()}
              className={`inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-text transition-colors ${
                hasGithub
                  ? 'hover:border-violet/60 hover:text-violet'
                  : 'cursor-not-allowed opacity-40'
              }`}
            >
              <GithubIcon className="h-4 w-4" />
              {hasGithub ? 'View Code' : 'Code coming soon'}
            </a>

            <a
              href={hasDemo ? project.demo : undefined}
              target={hasDemo ? '_blank' : undefined}
              rel={hasDemo ? 'noreferrer' : undefined}
              aria-disabled={!hasDemo}
              onClick={(e) => !hasDemo && e.preventDefault()}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-transform ${
                hasDemo
                  ? 'bg-gradient-to-r from-violet to-cyan hover:scale-[1.03]'
                  : 'cursor-not-allowed bg-elevated text-muted opacity-60'
              }`}
            >
              <ExternalLinkIcon className="h-4 w-4" />
              {hasDemo ? 'Live Demo' : 'Demo coming soon'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}