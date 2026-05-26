import SectionHeader from './SectionHeader'

const timeline = [
  { num: '01', title: 'Audit & Architecture', desc: 'Mapped flows, found bottlenecks, built ClickUp from scratch for EM and D&D — 30+ custom fields per space.', date: 'Oct – Nov 2025' },
  { num: '02', title: 'Infra & Standardization', desc: 'Client channel revamp, asset folders, ClickUp-to-Airtable pipeline, alias ID transition. 75% of input standardized.', date: 'Dec 2025 – Feb 2026' },
  { num: '03', title: 'Agent Deployment', desc: 'QM, Forge, Allocator, Scout — all in production. Standup eliminated. Lead role replaced. 12 hrs of daily capacity recovered.', date: 'Mar 2026' },
  { num: '04', title: 'Centralization & KT Pipeline', desc: 'D&D exit managed. 10–15 brand digests/day via Claude pipeline. Per-client projects as persistent contextual memory.', date: 'Apr 2026' },
]

const prose = [
  <>Walked into a high-velocity agency running two departments on <strong style={{ fontWeight: 500, color: 'var(--black)' }}>tribal knowledge, gut feel, and manual standups</strong>. No structured ClickUp. No documented workflows. No visibility.</>,
  <>The goal wasn't just to fix things — it was to <strong style={{ fontWeight: 500, color: 'var(--black)' }}>rebuild from first principles with AI at the core</strong>. Not as a gimmick, but as real operational leverage.</>,
  <>Eight months later: four agents in production, ₹1.5CR in annual savings identified, and a team that ships faster with fewer people.</>,
]

export default function Story() {
  return (
    <section id="story" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <SectionHeader label="The origin" title="How we got here" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'clamp(2.5rem, 6vw, 5rem)',
          alignItems: 'start',
        }}>

          {/* prose */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {prose.map((p, i) => (
              <p key={i} style={{
                fontSize: '1.0625rem', fontWeight: 300,
                lineHeight: 1.8, color: 'var(--text-body)',
              }}>{p}</p>
            ))}
          </div>

          {/* timeline */}
          <div role="list">
            {timeline.map((t, i) => (
              <div key={i} role="listitem" style={{
                display: 'grid', gridTemplateColumns: '36px 1fr',
                gap: '1.25rem',
                paddingBottom: i < timeline.length - 1 ? '2.25rem' : 0,
                position: 'relative',
              }}>
                {i < timeline.length - 1 && (
                  <div style={{
                    position: 'absolute', left: 17, top: 36, bottom: 0,
                    width: 1, background: 'var(--border)',
                  }} />
                )}
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--black)', color: 'var(--off-white)',
                  fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>{t.num}</div>
                <div style={{ paddingTop: '0.375rem' }}>
                  <div style={{
                    fontFamily: 'var(--ff-display)', fontWeight: 700,
                    fontSize: '0.9375rem', letterSpacing: '-0.01em',
                    marginBottom: '0.375rem', color: 'var(--black)',
                  }}>{t.title}</div>
                  <p style={{
                    fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.65,
                    color: 'var(--muted)', marginBottom: '0.5rem',
                  }}>{t.desc}</p>
                  <div style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '0.625rem',
                    color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>{t.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
