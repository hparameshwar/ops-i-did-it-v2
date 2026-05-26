export default function Proof() {
  const groups = [
    {
      category: 'Money saved',
      color: '#c8f25a',
      textColor: 'var(--black)',
      stats: [
        { num: '₹1.5CR', label: 'Long-term annual savings', detail: 'D&D restructuring · 6+ exits · dept merged' },
        { num: '₹34L',   label: 'Immediate annual savings', detail: 'Lead role eliminated · 2 role exits' },
        { num: '₹314',   label: 'Cost per email — exposed', detail: '57% utilization · ₹1.54L/month idle found' },
      ],
    },
    {
      category: 'Time recovered',
      color: 'var(--black)',
      textColor: 'var(--off-white)',
      stats: [
        { num: '12 hrs', label: 'Team capacity daily', detail: 'Standup eliminated · agents handle pre-10 AM' },
        { num: '2+ hrs', label: 'Saved per agent per day', detail: 'Task creation, routing, validation — automated' },
        { num: '15 min', label: 'Task routing now', detail: 'Was 1.5 hrs · Allocator handles end to end' },
      ],
    },
    {
      category: 'Scale achieved',
      color: '#111827',
      textColor: 'var(--off-white)',
      stats: [
        { num: '500+',  label: 'Tasks automated', detail: 'QM + Forge + Allocator in production' },
        { num: '75%',   label: 'Input standardized', detail: 'ClickUp forms · naming conventions · agent intake' },
        { num: '10–15', label: 'Brand digests/day', detail: 'KT doc → research → HTML → attached' },
      ],
    },
  ]

  return (
    <section id="proof" style={{ background: 'var(--off-white)' }}>
      <div className="container">

        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--muted)', marginBottom: '1rem',
          }}>
            <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />
            The proof
          </div>
          <h2 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.01em',
            color: 'var(--black)',
          }}>Did it work?<br />Yes.</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1rem',
        }}>
          {groups.map((g, gi) => (
            <div key={gi} style={{
              background: g.color,
              color: g.textColor,
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}>
              {/* category header */}
              <div style={{
                padding: '1.25rem 1.75rem',
                borderBottom: `1px solid ${g.textColor === 'var(--black)' ? 'rgba(13,13,13,0.12)' : 'rgba(255,255,255,0.08)'}`,
                fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6,
              }}>{g.category}</div>

              {/* stats */}
              {g.stats.map((s, si) => (
                <div key={si} style={{
                  padding: '1.25rem 1.75rem',
                  borderBottom: si < g.stats.length - 1
                    ? `1px solid ${g.textColor === 'var(--black)' ? 'rgba(13,13,13,0.08)' : 'rgba(255,255,255,0.06)'}`
                    : 'none',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: '1rem',
                  flexWrap: 'wrap',
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'var(--ff-body)', fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)',
                      fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1,
                      marginBottom: '0.25rem',
                    }}>{s.num}</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 400, opacity: 0.75 }}>{s.label}</div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem',
                    opacity: 0.45, letterSpacing: '0.04em',
                    textAlign: 'right', maxWidth: 160, lineHeight: 1.5,
                  }}>{s.detail}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
