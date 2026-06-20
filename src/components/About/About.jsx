import { useScrollReveal } from '../../hooks/useScrollReveal'
import './About.css'

export function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="about">
      <div className="section">
        <div className="about__grid">
          <div className="about__left">
            <span className="about__num">01</span>
            <h2 className="about__heading">About<br />Me</h2>
          </div>

          <div className="about__right reveal reveal-stagger" ref={ref}>
            <p>
              I&apos;m a Mathematics and Data Science student at UBC, though I got
              here by way of a few places. I grew up in Bahrain, I&apos;m Pakistani,
              and I now live in Vancouver. Moving between those worlds is probably
              why I&apos;m comfortable sitting between things — which is more or less
              how I work too.
            </p>
            <p>
              Ultimately, I thoroughly enjoy problem solving, and lately I&apos;ve
              taken an affinity to the data side. I enjoy the part where you take
              something raw and messy and figure out what it&apos;s actually telling
              you, then build a model that still holds up when it meets data it has
              never seen. I also enjoy writing the software around the data — the
              pipelines and interfaces that decide whether any of the analysis ever
              gets used.
            </p>
            <p>
              Away from the screen, I play a lot of chess and love sports,
              especially volleyball and basketball. Lately I&apos;ve also been deep
              in a board game phase (insane Catan addiction, iykyk). They scratch
              the same itch the work does: read a messy situation, weigh the odds,
              and make a decent decision before you have all the information.
            </p>

            <div className="about__facts">
              <div>
                <span className="about__fact-label">Location</span>
                <span className="about__fact-value">Vancouver, Canada</span>
              </div>
              <div>
                <span className="about__fact-label">Focus</span>
                <span className="about__fact-value">Data &amp; Software</span>
              </div>
              <div>
                <span className="about__fact-label">Status</span>
                <span className="about__fact-value">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
