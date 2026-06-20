import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer__copy">© {new Date().getFullYear()} Ali Abbas</span>
      <span className="footer__built">Built with React &amp; Vite</span>
    </footer>
  )
}
