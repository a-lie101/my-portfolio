const ACCENT = 'var(--color-accent)'
const MUTED  = 'var(--color-text-muted)'

// Minimal 16:9 line-art keyed to each project's domain.
function AudioVisual() {
  // Equalizer bars (audio features) with a regression trend line over them.
  const bars = [110, 95, 122, 80, 104, 68, 92, 58, 86, 52, 78]
  const x0 = 46
  const step = 21
  return (
    <svg viewBox="0 0 320 180" fill="none" preserveAspectRatio="xMidYMid meet">
      {bars.map((top, i) => (
        <line
          key={i}
          x1={x0 + i * step} y1={150}
          x2={x0 + i * step} y2={top}
          stroke={MUTED} strokeWidth="3" strokeOpacity="0.45" strokeLinecap="round"
        />
      ))}
      <path
        d="M40 132 C 110 118, 150 96, 200 80 S 280 56, 284 52"
        stroke={ACCENT} strokeWidth="1.75" strokeLinecap="round"
      />
      <circle cx="40" cy="132" r="3" fill={ACCENT} />
      <circle cx="200" cy="80" r="3" fill={ACCENT} />
      <circle cx="284" cy="52" r="3" fill={ACCENT} />
    </svg>
  )
}

function SignalVisual() {
  // Steady sensor signal that degrades into an anomaly spike (flagged).
  return (
    <svg viewBox="0 0 320 180" fill="none" preserveAspectRatio="xMidYMid meet">
      <line x1="36" y1="74" x2="284" y2="74" stroke={MUTED} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 5" />
      <path
        d="M36 110 q 14 -16 28 0 t 28 0 t 28 0 t 28 0 q 14 -2 22 -44 q 6 -30 18 18 q 8 30 22 26 t 28 0 t 26 0"
        stroke={ACCENT} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="184" cy="48" r="11" stroke={ACCENT} strokeWidth="1.25" strokeOpacity="0.6" />
      <circle cx="184" cy="48" r="3" fill={ACCENT} />
    </svg>
  )
}

function EcgVisual() {
  // A heart with an ECG trace running horizontally through it (QRS complex
  // centered over the heart), inspired by a classic heartbeat icon.
  return (
    <svg viewBox="0 0 320 180" fill="none" preserveAspectRatio="xMidYMid meet">
      <path
        d="M160 150
           C 122.2 120, 97 100, 97 76
           C 97 56, 111.4 46, 125.8 46
           C 141.1 46, 152.8 58, 160 70
           C 167.2 58, 178.9 46, 194.2 46
           C 208.6 46, 223 56, 223 76
           C 223 100, 197.8 120, 160 150 Z"
        stroke={MUTED} strokeWidth="1.5" strokeOpacity="0.55"
        fill={MUTED} fillOpacity="0.08" strokeLinejoin="round"
      />
      <path
        d="M14 96 H 116
           l 8 -8 l 8 8 l 6 0
           l 6 12 l 8 -58 l 8 74 l 8 -28 l 6 0
           H 306"
        stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

function BarsVisual() {
  // Stat bars with a highlighted record and an average baseline.
  const data = [
    { x: 60,  top: 120 },
    { x: 108, top: 86 },
    { x: 156, top: 132 },
    { x: 204, top: 60, hot: true },
    { x: 252, top: 100 },
  ]
  return (
    <svg viewBox="0 0 320 180" fill="none" preserveAspectRatio="xMidYMid meet">
      <line x1="36" y1="150" x2="288" y2="150" stroke={MUTED} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="36" y1="98" x2="288" y2="98" stroke={MUTED} strokeWidth="1" strokeOpacity="0.35" strokeDasharray="4 5" />
      {data.map((d, i) => (
        <rect
          key={i}
          x={d.x} y={d.top} width="26" height={150 - d.top}
          stroke={d.hot ? ACCENT : MUTED}
          strokeWidth="1.5"
          strokeOpacity={d.hot ? 1 : 0.5}
          fill={d.hot ? 'var(--color-accent-dim)' : 'none'}
        />
      ))}
    </svg>
  )
}

const VISUALS = {
  audio:  AudioVisual,
  signal: SignalVisual,
  ecg:    EcgVisual,
  bars:   BarsVisual,
}

export function ProjectVisual({ visual }) {
  const Component = VISUALS[visual]
  if (!Component) return null
  return (
    <div className="project-card__visual">
      <Component />
    </div>
  )
}
