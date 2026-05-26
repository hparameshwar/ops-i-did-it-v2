import SectionHeader from './SectionHeader'

const items = [
  {
    title: 'Claude Design System',
    desc: 'Per-brand design system in Claude — fed with .fig files, asset folders, and Figma comments. First draft HTML generated, then converted to Figma layers via plugin. Zero template guesswork.',
  },
  {
    title: 'Figma Conversion Plugin',
    desc: 'Plugin that converts HTML output into exact Figma layers — no fallbacks, no approximations. Tied directly to the design system output. Making the first-draft loop fully automated.',
  },
  {
    title: 'End-to-End Client Onboarding',
    desc: 'From sales handoff to audit to task creation to strategy lock to brief generation. Every step automated or agent-assisted. No manual onboarding overhead.',
  },
]

const Badge = () => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', fontWeight: 700,
    color: '#fcd34d', border: '1px solid #fcd34d',
    padding: '0.275rem 0.675rem', borderRadius: 100,
    marginBottom: '1.5rem',
    letterSpacing: '0.07em', textTransform: 'uppercase',
  }}>
    <span style={{
      width: 5, height: 5, borderRadius: '50%',
      background: '#fcd34d',
      animation: 'pulse 1.8s ease-in-out infinite',
    }} />
    In progress
  </div>
)

export default function WIP() {
  return (
    <section id="next" style={{ background: 'var(--black)', color: 'var(--off-white)' }}>
      <div className="container">
        <SectionHeader label="What's cooking" title="The next phase" light />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '1rem',
        }}>
          {items.map((item, i) => (
            <div key={i} style={{
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.75rem, 3.5vw, 2.25rem)',
            }}>
              <Badge />
              <div style={{
                fontFamily: 'var(--ff-display)', fontSize: '1.25rem',
                fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.2,
                marginBottom: '0.875rem',
              }}>{item.title}</div>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.75, color: 'rgba(245,242,235,0.45)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
