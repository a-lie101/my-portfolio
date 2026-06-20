import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Contact.css'

export function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="contact">
      <div className="section reveal" ref={ref}>
        <div className="contact__inner">
          <h2 className="contact__heading">Let&apos;s build something.</h2>
          <p className="contact__sub">
            I&apos;m open to internships, freelance projects, and interesting
            conversations. If something you&apos;re working on sounds like it might be
            a fit, reach out.
          </p>

          <a
            href="mailto:ali.r.abbas.2005@gmail.com"
            className="contact__email"
            data-cursor-hover
          >
            ali.r.abbas.2005@gmail.com
          </a>

          <div className="contact__socials">
            <a
              href="https://github.com/a-lie101"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social"
              data-cursor-hover
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alirazaabbas/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social"
              data-cursor-hover
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
