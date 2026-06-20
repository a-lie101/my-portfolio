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
            I&apos;m open to full-time roles, freelance projects, and interesting
            conversations. If something you&apos;re working on sounds like it might be
            a fit, reach out.
          </p>

          <a
            href="mailto:rraaza101@gmail.com"
            className="contact__email"
            data-cursor-hover
          >
            rraaza101@gmail.com
          </a>

          <div className="contact__socials">
            <a
              href="https://github.com/aliabbas"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social"
              data-cursor-hover
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/aliabbas"
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
