import { useEffect, useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import './Nav.css'

const LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
]

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'contact']

export function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const activeSection             = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav__logo" data-cursor-hover>AA</a>

        <div className="nav__links">
          {LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            return (
              <a
                key={label}
                href={href}
                className={`nav__link${activeSection === id ? ' active' : ''}`}
                data-cursor-hover
              >
                {label}
              </a>
            )
          })}
        </div>

        <button
          className={`nav__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          data-cursor-hover
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav__mobile${menuOpen ? ' open' : ''}`}>
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="nav__link"
            onClick={closeMenu}
            data-cursor-hover
          >
            {label}
          </a>
        ))}
      </div>
    </>
  )
}
