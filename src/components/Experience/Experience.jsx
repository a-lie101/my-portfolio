import { useScrollReveal } from '../../hooks/useScrollReveal'
import { experience } from '../../data/experience'
import './Experience.css'

export function Experience() {
  const headingRef = useScrollReveal()
  const listRef    = useScrollReveal()

  return (
    <section id="experience" className="experience">
      <div className="section">
        <span className="section__label">Where I&apos;ve Worked</span>
        <h2 className="section__heading reveal" ref={headingRef}>Experience</h2>

        <div className="experience__list reveal-stagger" ref={listRef}>
          {experience.map((job, i) => (
            <article className="experience__item" key={job.id} style={{ '--i': i }}>
              <span className="experience__period">{job.period}</span>
              <div>
                <h3 className="experience__role">{job.role}</h3>
                <p className="experience__company">{job.company}</p>
                <div className="experience__points">
                  {job.points.map((point, pi) => (
                    <p className="experience__point" key={pi}>{point}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
