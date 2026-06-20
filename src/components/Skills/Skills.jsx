import { useScrollReveal } from '../../hooks/useScrollReveal'
import { pipeline } from '../../data/skills'
import './Skills.css'

export function Skills() {
  const headingRef = useScrollReveal()
  const introRef   = useScrollReveal()
  const flowRef    = useScrollReveal()

  return (
    <section id="skills" className="skills">
      <div className="section">
        <span className="section__label">Capabilities</span>
        <h2 className="section__heading reveal" ref={headingRef}>
          How I move data
        </h2>
        <p className="skills__intro reveal" ref={introRef}>
          The tools I reach for, mapped to the path data takes — from raw source
          to something worth shipping.
        </p>

        <div className="skills__flow reveal-stagger" ref={flowRef}>
          {pipeline.map((stage, si) => (
            <div className="skills__stage" key={stage.stage} style={{ '--i': si }}>
              <div className="skills__stage-head">
                <span className="skills__stage-num">
                  {String(si).padStart(2, '0')}
                </span>
                <span className="skills__stage-name">{stage.stage}</span>
              </div>
              <p className="skills__stage-caption">{stage.caption}</p>
              <div className="skills__tags">
                {stage.items.map((item) => (
                  <span className="skills__tag" key={item}>{item}</span>
                ))}
              </div>
              {si < pipeline.length - 1 && (
                <span className="skills__connector" aria-hidden="true">
                  <span className="skills__pulse" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
