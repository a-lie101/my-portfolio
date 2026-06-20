import { useScrollReveal } from '../../hooks/useScrollReveal'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="projects">
      <div className="section">
        <span className="section__label">Selected Work</span>
        <h2 className="section__heading reveal" ref={ref}>Projects</h2>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
