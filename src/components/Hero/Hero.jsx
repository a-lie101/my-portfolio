import './Hero.css'

const NAME_FIRST = 'Ali'
const NAME_LAST  = 'Abbas'
const BASE_DELAY = 0.5

function SplitName({ text, rowDelay }) {
  return (
    <span className="hero__name-row">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="hero__char"
          style={{ animationDelay: `${rowDelay + i * 0.04}s` }}
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__orb" />

      <div className="hero__content">
        <span className="hero__label">Data Engineer &amp; ML Developer</span>

        <h1 className="hero__name">
          <SplitName text={NAME_FIRST} rowDelay={BASE_DELAY} />
          <SplitName text={NAME_LAST}  rowDelay={BASE_DELAY + NAME_FIRST.length * 0.04 + 0.05} />
        </h1>

        <p className="hero__tagline">
          I love building things that solve real problems. I move comfortably
          between data pipelines and full-stack platforms, and am always seeking
          opportunities to apply these skills to hard, meaningful challenges.
        </p>

        <div className="hero__cta">
          <a href="#projects" className="btn-filled" data-cursor-hover>
            View Work
          </a>
          <a href="#contact" className="btn-outline" data-cursor-hover>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
