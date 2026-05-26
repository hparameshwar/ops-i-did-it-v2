export default function Bets() {
  const bets = [
    {
      order: '01',
      decision: 'Map everything before touching anything',
      why: 'Oct–Nov 2025 was pure listening. Synced 1-on-1 with every team member to understand actual workflows, not assumed ones. Ran escalation analysis across client channels, identified where the real friction was. Built the ClickUp architecture for both EM and D&D from scratch — 40+ brands, 12 zones, 30+ custom fields — before writing a single automation.',
      result: 'Consistent ClickUp usage across 2 departments. Clear picture of where automation would actually matter.',
      when: 'Oct – Nov 2025',
    },
    {
      order: '02',
      decision: 'Clean the intake before anything downstream can work',
      why: 'Dec 2025 to Jan 2026 was infrastructure only. Revamped all client channels, sourced brand data for every client into a single Google Sheet, consolidated review boards, standardized naming conventions. None of this was visible work. All of it was load-bearing — without it, no agent could scan, validate, or route anything reliably.',
      result: '75% of input standardized. QM agent can now process tasks without a human in the loop.',
      when: 'Dec 2025 – Jan 2026',
    },
    {
      order: '03',
      decision: 'Build the data layer, then let the numbers make the decisions',
      why: 'Feb 2026 was about visibility. Built the ClickUp-to-Airtable pipeline from scratch — multi-entry per task, real-time. Designed the full schema: 6 tables, all fields, all relationships. The cost dashboard that came out of it exposed ₹314/email, 57% designer utilization, ₹1.54L/month sitting idle. No one asked for this dashboard. The data from it drove a ₹1.5CR restructuring decision.',
      result: 'Founders had real numbers for the first time. Every staffing and cost decision after this had data behind it.',
      when: 'Feb 2026',
    },
    {
      order: '04',
      decision: 'Now build the agents — on top of everything that is already clean',
      why: 'Mar 2026 was when agents were actually built — after 5 months of foundation work. QM, Forge, Allocator, Scout — each one could only run reliably because the data was structured, the intake was standardized, and the ClickUp architecture gave it something consistent to read. The Lead role was eliminated not because an agent replaced a person, but because the system was finally clean enough for an agent to do it better.',
      result: '500+ tasks routed. 143 QM handoffs. 2+ hrs/day eliminated per agent. Standup gone. ₹1.5L/month saved.',
      when: 'Mar 2026',
    },
  ]

  return (
    <section id="bets" style={{ background: 'var(--cream)' }}>
      <div className="container">

        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--muted)', marginBottom: '0.875rem',
          }}>
            <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />
            The decisions
          </div>
          <h2 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--black)',
            maxWidth: 520, overflowWrap: 'break-word',
          }}>The bets made,<br />in the order they were made</h2>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: '1px',
          background: 'var(--border)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          border: '1px solid var(--border)',
        }}>
          {bets.map((b, i) => (
            <div key={i} style={{
              background: 'var(--off-white)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'grid',
              gridTemplateColumns: '48px 1fr',
              gap: 'clamp(1rem, 2.5vw, 2rem)',
              alignItems: 'start',
            }}>
              <div style={{
                fontFamily: 'var(--ff-display)',
                fontSize: '2rem', fontWeight: 800,
                color: 'rgba(13,13,13,0.08)', lineHeight: 1,
                paddingTop: '0.25rem', userSelect: 'none',
              }}>{b.order}</div>

              <div>
                <div style={{
                  display: 'flex', alignItems: 'flex-start',
                  justifyContent: 'space-between', gap: '1rem',
                  flexWrap: 'wrap', marginBottom: '0.75rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--ff-display)',
                    fontSize: 'clamp(1rem, 1.75vw, 1.25rem)',
                    fontWeight: 800, letterSpacing: '-0.01em',
                    color: 'var(--black)', lineHeight: 1.2,
                    overflowWrap: 'break-word', minWidth: 0,
                  }}>{b.decision}</div>
                  <div style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem',
                    color: 'var(--muted)', letterSpacing: '0.08em',
                    textTransform: 'uppercase', whiteSpace: 'nowrap',
                    paddingTop: '0.2rem', flexShrink: 0,
                  }}>{b.when}</div>
                </div>

                <p style={{
                  fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75,
                  color: 'var(--text-body)', marginBottom: '1.25rem',
                  maxWidth: 660,
                }}>{b.why}</p>

                <div style={{
                  display: 'inline-flex', alignItems: 'flex-start', gap: '0.625rem',
                  background: 'var(--black)',
                  padding: '0.625rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  maxWidth: '100%',
                }}>
                  <span style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '0.5rem',
                    color: 'var(--accent)', letterSpacing: '0.1em',
                    textTransform: 'uppercase', fontWeight: 700,
                    paddingTop: '0.15rem', flexShrink: 0,
                  }}>Result</span>
                  <span style={{
                    fontSize: '0.875rem', fontWeight: 400,
                    color: 'rgba(245,242,235,0.75)', lineHeight: 1.55,
                  }}>{b.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
