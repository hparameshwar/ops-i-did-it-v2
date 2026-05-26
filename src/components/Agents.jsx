import SectionHeader from './SectionHeader'

const agents = [
  {
    name: 'Quartermaster', bg: 'QM', live: true,
    role: 'Task validation & intake automation',
    desc: 'Scans incoming tasks, extracts brand, auto-fills ClickUp fields, validates completeness, and hands off to Forge. Works across 15+ clients without human review.',
    statNum: '143', statLabel: 'handoffs completed · 130+ zone transitions',
  },
  {
    name: 'Forge', bg: 'Forge', live: true,
    role: 'Internal task creation engine',
    desc: 'Reads QM handoff, creates structured ClickUp tasks from 4 copy sources, uploads attachments, and links tasks. Eliminated 2+ hrs of daily manual work across 12+ clients.',
    statNum: '105+', statLabel: 'tasks created · 12+ clients',
  },
  {
    name: 'Allocator', bg: 'Alloc', live: true,
    role: 'Assignment, routing & capacity management',
    desc: 'Routes by brand history and designer capacity (1 CU = 40 min). 19 Slack commands. Auto-logs assignments. Replaced the Lead role entirely — saving ₹1.5L/month.',
    statNum: '500+', statLabel: 'tasks routed · delay 1.5 hrs → 15 min',
  },
  {
    name: 'Vision QA', bg: 'Vision', live: false,
    role: 'Design QA before client sees it',
    desc: 'Compares design output against copy doc and brand checklist. Catches wrong products, font errors, copy mismatches. Moving from agent to Claude Projects + plugin architecture.',
    statNum: '6 mo', statLabel: 'Slack history analyzed per brand checklist',
  },
]

export default function Agents() {
  return (
    <section id="agents" style={{ background: 'var(--black)', color: 'var(--off-white)' }}>
      <div className="container">
        <SectionHeader label="AI agents built" title="Meet the team<br/>that never sleeps" light />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '1px',                              /* fix: was unitless 1 */
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        }}>
          {agents.map((a) => (
            <div key={a.name} style={{
              background: 'var(--black)',
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              position: 'relative', overflow: 'hidden',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#111'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--black)'}
            >
              {/* ghost bg label */}
              <div aria-hidden="true" style={{
                position: 'absolute', right: '-0.5rem', top: '-0.5rem',
                fontFamily: 'var(--ff-display)', fontSize: '5.5rem', fontWeight: 800,
                color: 'rgba(255,255,255,0.03)', pointerEvents: 'none',
                lineHeight: 1, letterSpacing: '-0.01em',
              }}>{a.bg}</div>

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.375rem' }}>
                <div style={{
                  fontFamily: 'var(--ff-display)', fontSize: '1.625rem',
                  fontWeight: 800, letterSpacing: '-0.01em',
                  color: 'var(--accent)', lineHeight: 1,
                }}>{a.name}</div>
                <span style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', fontWeight: 700,
                  padding: '0.3rem 0.7rem', borderRadius: 100,
                  border: `1px solid ${a.live ? '#6ee7b7' : '#fcd34d'}`,
                  color: a.live ? '#6ee7b7' : '#fcd34d',
                  letterSpacing: '0.07em', textTransform: 'uppercase',
                  whiteSpace: 'nowrap', flexShrink: 0, marginTop: '0.25rem',
                }}>{a.live ? 'Live' : 'In progress'}</span>
              </div>

              <div style={{ fontSize: '0.875rem', color: 'rgba(245,242,235,0.4)', fontStyle: 'italic', marginBottom: '1.25rem' }}>{a.role}</div>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,242,235,0.65)', marginBottom: '1.75rem' }}>{a.desc}</p>
              <div style={{ fontFamily: 'var(--ff-body)', fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1 }}>{a.statNum}</div>
              <div style={{ fontSize: '0.8125rem', color: 'rgba(245,242,235,0.35)', marginTop: '0.3rem' }}>{a.statLabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
