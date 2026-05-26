export default function Analytics() {
  const schema = [
    { table: 'Intake Events',       desc: 'Every task entering the system. Source of truth for daily volume.' },
    { table: 'Design Zone',         desc: 'Designer output — new vs revision, capacity units consumed, client.' },
    { table: 'Copy Zone',           desc: 'Copy team throughput broken down by task type and client.' },
    { table: 'Dev Zone',            desc: 'Development pipeline — slicing, compression, Klaviyo upload.' },
    { table: 'D&D Headcount',       desc: 'Designer roster, cost per head, utilization bands.' },
    { table: 'P&L Table',           desc: 'Cost per email, idle capacity, monthly burn vs output.' },
  ]

  const insights = [
    {
      finding: '₹314',
      label: 'True cost per email',
      detail: 'Exposed by dividing total monthly burn by actual output. Not estimated — derived from live data.',
      decision: 'Triggered the restructuring conversation with founders.',
    },
    {
      finding: '57%',
      label: 'Actual designer utilization',
      detail: '1 CU = 40 min. Per-designer capacity caps with health bands. Built the metric from scratch.',
      decision: 'Proved ₹1.54L/month in idle capacity sitting in the org.',
    },
    {
      finding: '1535',
      label: 'Records analyzed',
      detail: 'Volume, efficiency, revision rate scored per designer across 6 months of output data.',
      decision: 'Gave founders data-backed keep/trim decisions. No gut feel.',
    },
    {
      finding: '40%',
      label: 'Tasks were revisions',
      detail: 'New vs revision split tracked per client, per designer, per day — not just in aggregate.',
      decision: 'Identified which clients were high-friction before capacity planning.',
    },
  ]

  return (
    <section id="analytics" style={{ background: 'var(--off-white)' }}>
      <div className="container">

        {/* header */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--muted)', marginBottom: '1rem',
          }}>
            <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />
            Analytics system
          </div>
          <h2 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.01em',
            color: 'var(--black)', marginBottom: '1rem',
          }}>Built from scratch.<br />Every table, every field.</h2>
          <p style={{
            fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.75,
            color: 'var(--muted)', maxWidth: 580,
          }}>
            Designed a multi-table Airtable base to give founders real-time visibility
            into cost, output, and capacity — across every team, every client, every day.
            No existing schema. Started from what questions needed answering.
          </p>
        </div>

        {/* two column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: 'clamp(2rem, 4vw, 3.5rem)',
          alignItems: 'start',
        }}>

          {/* left — schema */}
          <div>
            <div style={{
              fontFamily: 'var(--ff-mono)', fontSize: '0.625rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--muted)', marginBottom: '1rem',
            }}>Data model — 6 tables</div>

            <div style={{
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}>
              {schema.map((t, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr',
                  borderBottom: i < schema.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <div style={{
                    padding: '1rem 1.25rem',
                    background: 'var(--cream)',
                    borderRight: '1px solid var(--border)',
                    fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
                    fontWeight: 700, color: 'var(--black)',
                    letterSpacing: '0.02em',
                    display: 'flex', alignItems: 'center',
                  }}>{t.table}</div>
                  <div style={{
                    padding: '1rem 1.25rem',
                    fontSize: '0.8125rem', fontWeight: 300,
                    lineHeight: 1.6, color: 'var(--muted)',
                    display: 'flex', alignItems: 'center',
                  }}>{t.desc}</div>
                </div>
              ))}
            </div>

            {/* what was tracked */}
            <div style={{
              marginTop: '1.25rem',
              padding: '1.25rem 1.5rem',
              background: 'var(--black)',
              borderRadius: 'var(--radius-md)',
            }}>
              <div style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', fontWeight: 700,
                color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>Per task, tracked daily</div>
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
              }}>
                {['Task type (new / revision)', 'Assigned designer', 'Client', 'Capacity units consumed', 'Completion date', 'Cost per task', 'Zone (copy / design / dev)', 'Brand history'].map((f, i) => (
                  <span key={i} style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem',
                    padding: '0.25rem 0.625rem', borderRadius: 100,
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(245,242,235,0.6)',
                    letterSpacing: '0.04em',
                  }}>{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* right — findings that drove decisions */}
          <div>
            <div style={{
              fontFamily: 'var(--ff-mono)', fontSize: '0.625rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--muted)', marginBottom: '1rem',
            }}>Findings → decisions</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {insights.map((ins, i) => (
                <div key={i} style={{
                  background: 'var(--cream)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <div style={{
                      fontFamily: 'var(--ff-body)', fontSize: '1.75rem',
                      fontWeight: 800, letterSpacing: '-0.01em',
                      color: 'var(--black)', lineHeight: 1,
                    }}>{ins.finding}</div>
                    <div style={{
                      fontFamily: 'var(--ff-display)', fontSize: '0.9375rem',
                      fontWeight: 700, color: 'var(--black)',
                    }}>{ins.label}</div>
                  </div>
                  <p style={{
                    fontSize: '0.8125rem', fontWeight: 300,
                    lineHeight: 1.65, color: 'var(--muted)',
                    marginBottom: '0.875rem',
                  }}>{ins.detail}</p>
                  {/* decision arrow */}
                  <div style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                    paddingTop: '0.875rem',
                    borderTop: '1px solid var(--border)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem',
                      color: 'var(--accent)', background: 'var(--black)',
                      padding: '0.2rem 0.5rem', borderRadius: '0.2rem',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      fontWeight: 700, flexShrink: 0, marginTop: '0.1rem',
                    }}>Decision</span>
                    <span style={{
                      fontSize: '0.8125rem', fontWeight: 400,
                      lineHeight: 1.55, color: 'var(--text-body)',
                    }}>{ins.decision}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
