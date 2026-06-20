import { ProjectVisual } from './ProjectVisual'

export function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <article className="project-card" data-cursor-hover>
      <div className="project-card__image">
        <div className="project-card__image-pattern" />
        <ProjectVisual visual={project.visual} />
      </div>

      <div className="project-card__body">
        <span className="project-card__num">{num}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>

        {(project.github || project.live) && (
          <div className="project-card__links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                data-cursor-hover
              >
                ↗ GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                data-cursor-hover
              >
                ↗ Live
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
