import SectionHeader from './SectionHeader'

const pillars = [
  {
    num: '01 / 03', emoji: '⚙️',
    title: 'Tools & Strategy',
    desc: 'Full stack designed from zero — ClickUp architecture, Airtable dashboards, N8N automations, Google Drive as agent memory. Every tool chosen to reduce human-in-the-loop.',
    tags: ['ClickUp', 'Airtable', 'N8N', 'Google Drive', 'Vercel'],
    bg: 'var(--black)', color: 'var(--off-white)',
  },
  {
    num: '02 / 03', emoji: '📐',
    title: 'Ops & Infrastructure',
    desc: 'Standardized how two departments operate — intake, handoff, QA, capacity modelling, cost tracking. Removed ambiguity so agents could run reliably.',
    tags: ['Workflows', 'SOP design', 'Capacity model', 'Cost tracking'],
    bg: 'var(--accent)', color: 'var(--black)',
  },
  {
    num: '03 / 03', emoji: '🤖',
    title: 'AI & Agents',
    desc: 'Four agents shipped to production. Claude Projects as per-client memory. Brand digest pipeline. Design system in Claude. Plugins for Figma and Chrome extend agent reach.',
    tags: ['Claude', 'Claude Projects', 'Figma plugin', 'Agents'],
    bg: '#111827', color: 'var(--off-white)',
  },
]

export default function Pillars() {
  return (
    <section style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <SectionHeader label="Core focus areas" title="Three pillars,<br/>one system" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1rem',
        }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              background: p.bg, color: p.color,
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.625rem', opacity: 0.45, letterSpacing: '0.08em' }}>{p.num}</div>
              <div style={{ fontSize: '1.75rem', lineHeight: 1 }} aria-hidden="true">{p.emoji}</div>
              <div style={{
                fontFamily: 'var(--ff-display)', fontSize: '1.375rem',
                fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.15,
              }}>{p.title}</div>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.7, opacity: 0.72 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: 'auto', paddingTop: '1rem' }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem',
                    padding: '0.25rem 0.625rem', borderRadius: 100,
                    border: '1px solid currentColor', opacity: 0.55,
                    letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
