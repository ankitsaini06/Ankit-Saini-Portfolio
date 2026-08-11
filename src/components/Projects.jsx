import { useMemo, useState } from 'react'
import { projects, projectCategories } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { GithubIcon, ExternalLinkIcon, BriefcaseIcon } from './Icons'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const featured = useMemo(
    () => projects.find((p) => p.featured),
    []
  )

  const rest = useMemo(
    () => projects.filter((p) => !p.featured),
    []
  )

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return rest

    return rest.filter(
      (project) => project.category === activeCategory
    )
  }, [activeCategory, rest])

  const showFeatured =
    featured &&
    (activeCategory === 'All' ||
      activeCategory === featured.category)

  const featuredHasGithub = Boolean(featured?.github)
  const featuredHasDemo = Boolean(featured?.demo)

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          description="A selection of projects showcasing my development skills."
          icon={BriefcaseIcon}
          accent="violet"
        />

        {showFeatured && (
          <Reveal delay={80}>
          <div className="group mt-10 overflow-hidden rounded-2xl border border-violet/30 bg-card shadow-glow-violet transition-all duration-300 hover:-translate-y-1 hover:border-violet/60 hover:shadow-glow-violet">              <div className="grid grid-cols-1 lg:grid-cols-2">

                <div className="group relative aspect-video overflow-hidden lg:aspect-auto">
                  <ImageWithFallback
                    src={featured.image}
                    alt={`${featured.name} preview`}
                    fallbackLabel={featured.name}
                    className="h-full w-full"
                    imgClassName="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-black/70">
                    {featured.category}
                  </span>
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8">

                  <h3 className="text-xl font-bold text-text sm:text-2xl">
                    {featured.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {featured.tagline}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {featured.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-elevated px-2.5 py-1 text-xs font-medium text-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {featured.features.length > 0 && (
                    <ul className="mt-4 grid grid-cols-1 gap-1.5 xs:grid-cols-2">
                      {featured.features.slice(0, 6).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">

                    <a
                      href={
                        featuredHasGithub
                          ? featured.github
                          : undefined
                      }
                      target={
                        featuredHasGithub
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        featuredHasGithub
                          ? 'noreferrer'
                          : undefined
                      }
                      aria-disabled={!featuredHasGithub}
                      onClick={(e) =>
                        !featuredHasGithub &&
                        e.preventDefault()
                      }
                      className={`inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-text transition-colors ${
                        featuredHasGithub
                          ? 'hover:border-violet/60 hover:text-violet'
                          : 'cursor-not-allowed opacity-40'
                      }`}
                    >
                      <GithubIcon className="h-4 w-4" />
                      {featuredHasGithub
                        ? 'View Code'
                        : 'Code coming soon'}
                    </a>

                    <a
                      href={
                        featuredHasDemo
                          ? featured.demo
                          : undefined
                      }
                      target={
                        featuredHasDemo
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        featuredHasDemo
                          ? 'noreferrer'
                          : undefined
                      }
                      aria-disabled={!featuredHasDemo}
                      onClick={(e) =>
                        !featuredHasDemo &&
                        e.preventDefault()
                      }
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-transform ${
                        featuredHasDemo
                          ? 'bg-gradient-to-r from-violet to-cyan hover:scale-[1.03]'
                          : 'cursor-not-allowed bg-elevated text-muted opacity-60'
                      }`}
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      {featuredHasDemo
                        ? 'Live Demo'
                        : 'Demo coming soon'}
                    </a>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProject(featured)
                      }
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-muted transition-colors hover:text-text"
                    >
                      View Details
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <Reveal delay={140}>
          <div className="mt-12 flex flex-wrap gap-2">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-violet bg-violet-soft text-violet'
                      : 'border-border text-muted hover:border-violet/40 hover:text-text'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </Reveal>

        {filteredProjects.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 60}
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          !showFeatured && (
            <Reveal delay={200}>
              <p className="mt-10 rounded-2xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted">
                No projects in this category yet.
              </p>
            </Reveal>
          )
        )}

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}