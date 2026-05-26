export default function Journey() {

  const netrinDots = [
    { period: 'Apr 2025', outcome: '30 brands onboarded', scale: 'in 40 days', detail: 'Built partnerships playbook from zero. Boldfit, Cosmix, The Body Shop. Full outreach to close.', color: '#d97706' },
    { period: 'May 2025', outcome: '60% referral conversion', scale: 'at peak', detail: 'Built referral tracker — Google Sheets + Zapier. 2–3 referrals/day. Zero engineering dependency.', color: '#d97706' },
    { period: 'Jun 2025', outcome: '20 beta users', scale: 'insights shaped roadmap', detail: 'Community runs in Chennai + Bangalore. 1K+ organic views, 20%+ engagement. Feedback → product.', color: '#d97706' },
  ]

  const optimiteDots = [
    { period: 'Oct–Nov 2025', outcome: '2 dept architectures', scale: '40+ brands, 30+ fields', detail: 'ClickUp rebuilt from zero for EM and D&D. Mapped every workflow via 1-on-1s before touching anything.', color: '#c8f25a' },
    { period: 'Dec–Jan 2026', outcome: '75% intake standardized', scale: 'agent-readable', detail: 'Client channels revamped, brand data sourced per client, review boards consolidated. All invisible, all load-bearing.', color: '#c8f25a' },
    { period: 'Feb 2026', outcome: '₹56L savings identified', scale: '1,535 records analyzed', detail: '6-table Airtable schema built from scratch. ₹314/email exposed. 57% utilization. Cost dashboard nobody asked for.', color: '#c8f25a' },
    { period: 'Mar 2026', outcome: '500+ tasks automated', scale: '12 hrs/day recovered', detail: 'QM (143 handoffs) · Forge (105+ tasks) · Allocator (500+, Lead role eliminated, ₹1.5L/month saved) · Scout. Standup gone. Routing: 1.5 hrs → 15 min.', color: '#c8f25a' },
    { period: 'Apr–May 2026', outcome: '40+ Claude Projects', scale: 'brand memory live', detail: '10–15 brand digests/day. KT pipeline built during dept exit. Design system + Figma plugin in progress.', color: '#c8f25a', wip: true },
  ]

  const earlier = [
    { role: 'Network Engineer', company: 'Mastec Quadgen', period: 'Apr 2022–Jun 2023', outcome: '15% delay reduction', detail: 'Cross-functional telecom rollouts. Built reporting dashboards. Developed SOPs for field + backend teams.' },
    { role: 'SDR — Emerging Markets', company: 'Netcore Cloud', period: 'Dec 2021–Mar 2022', outcome: 'GTM campaigns executed', detail: 'SaaS GTM across product lines. KPI tracking, competitor benchmarking, lead flow analysis.' },
  ]

  const DotLine = ({ dots, color, borderColor, bgColor }) => (
    <div style={{ position: 'relative', paddingLeft: '2rem' }}>
      {/* vertical line */}
      <div style={{
        position: 'absolute', left: '0.45rem', top: '0.75rem',
        bottom: '0.75rem', width: 1.5,
        background: `linear-gradient(to bottom, ${color}60, ${color}20)`,
      }} />
      {dots.map((d, i) => (
        <div key={i} style={{
          display: 'grid',
          gridTemplateColumns: '140px 1fr',
          gap: 'clamp(1rem, 3vw, 2rem)',
          paddingBottom: i < dots.length - 1 ? '1.75rem' : 0,
          position: 'relative',
        }}>
          {/* dot */}
          <div style={{
            position: 'absolute', left: '-1.575rem', top: '0.35rem',
            width: 10, height: 10, borderRadius: '50%',
            background: d.wip ? 'transparent' : d.color,
            border: d.wip ? `2px solid ${d.color}` : 'none',
            boxShadow: d.wip ? 'none' : `0 0 0 3px ${d.color}25`,
          }} />

          {/* left — period + outcome */}
          <div>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.375rem' }}>{d.period}</div>
            <div style={{ fontFamily: 'var(--ff-body)', fontSize: 'clamp(0.9rem, 1.5vw, 1.0625rem)', fontWeight: 700, color: 'var(--black)', lineHeight: 1.15, marginBottom: '0.2rem' }}>{d.outcome}</div>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', color: d.color, letterSpacing: '0.04em' }}>{d.scale}</div>
            {d.wip && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                marginTop: '0.5rem',
                fontFamily: 'var(--ff-mono)', fontSize: '0.5rem',
                color: d.color, border: `1px solid ${d.color}`,
                padding: '0.2rem 0.5rem', borderRadius: 100,
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: d.color, animation: 'pulse 1.8s ease-in-out infinite' }} />
                In progress
              </div>
            )}
          </div>

          {/* right — detail */}
          <p style={{ fontSize: '0.8125rem', fontWeight: 300, lineHeight: 1.65, color: 'var(--muted)', paddingTop: '0.125rem' }}>{d.detail}</p>
        </div>
      ))}
    </div>
  )

  return (
    <section id="journey" style={{ background: 'var(--cream)', paddingBlock: 'clamp(5rem, 10vw, 8rem)' }}>
      <div className="container">

        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--muted)', marginBottom: '0.875rem',
          }}>
            <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />
            The last 12 months
          </div>
          <h2 style={{
            fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--black)',
          }}>Two companies.<br />One way of working.</h2>
        </div>

        {/* NETRIN */}
        <div style={{
          border: '1px solid rgba(217,119,6,0.2)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          marginBottom: '1.5rem',
        }}>
          {/* header */}
          <div style={{
            padding: 'clamp(1.25rem, 3vw, 2rem)',
            background: 'rgba(217,119,6,0.06)',
            borderBottom: '1px solid rgba(217,119,6,0.15)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.25rem', alignItems: 'center',
          }}>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5rem', fontWeight: 700, color: '#d97706', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.375rem' }}>Apr – Jun 2025</div>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 800, letterSpacing: '-0.01em', color: 'var(--black)', marginBottom: '0.2rem' }}>Netrin Sports Technologies</div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', color: 'var(--muted)', letterSpacing: '0.04em' }}>Partnerships, GTM & Product — Founder's Office</div>
            </div>
            {/* quick result chips */}
            <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
              {['30 brands · 40 days', '60% referral conversion', '20 beta users'].map((c, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', fontWeight: 700,
                  color: '#92400e', background: 'rgba(217,119,6,0.12)',
                  border: '1px solid rgba(217,119,6,0.25)',
                  padding: '0.3rem 0.75rem', borderRadius: 100,
                  letterSpacing: '0.04em',
                }}>{c}</span>
              ))}
            </div>
          </div>

          {/* dot timeline */}
          <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
            <DotLine dots={netrinDots} color="#d97706" />
          </div>
        </div>

        {/* OPTIMITE */}
        <div style={{
          border: '1px solid rgba(200,242,90,0.15)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          marginBottom: '1.5rem',
        }}>
          <div style={{
            padding: 'clamp(1.25rem, 3vw, 2rem)',
            background: 'rgba(200,242,90,0.04)',
            borderBottom: '1px solid rgba(200,242,90,0.12)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.25rem', alignItems: 'center',
          }}>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5rem', fontWeight: 700, color: '#c8f25a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.375rem' }}>Oct 2025 – Present</div>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 800, letterSpacing: '-0.01em', color: 'var(--black)', marginBottom: '0.2rem' }}>Optimites — 40-brand digital agency</div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', color: 'var(--muted)', letterSpacing: '0.04em' }}>Founder's Office — Ops, AI & Strategy</div>
            </div>
            <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
              {['₹56L savings', '500+ tasks automated', '4 agents live', '12 hrs/day recovered'].map((c, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', fontWeight: 700,
                  color: '#3a5e00', background: 'rgba(200,242,90,0.12)',
                  border: '1px solid rgba(200,242,90,0.25)',
                  padding: '0.3rem 0.75rem', borderRadius: 100,
                  letterSpacing: '0.04em',
                }}>{c}</span>
              ))}
            </div>
          </div>
          <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
            <DotLine dots={optimiteDots} color="#c8f25a" />
          </div>
        </div>

        {/* Earlier experience */}
        <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '1rem' }}>
          <div style={{ padding: '0.75rem 1.5rem', background: 'var(--off-white)', borderBottom: '1px solid var(--border)', fontFamily: 'var(--ff-mono)', fontSize: '0.5rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Earlier experience</div>
          {earlier.map((e, i) => (
            <div key={i} style={{
              padding: '1.25rem 1.5rem',
              borderBottom: i < earlier.length - 1 ? '1px solid var(--border)' : 'none',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '1rem', background: 'var(--off-white)',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--black)', marginBottom: '0.2rem' }}>{e.role}</div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>{e.company} · {e.period}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--ff-body)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--black)', marginBottom: '0.25rem' }}>{e.outcome}</div>
                <p style={{ fontSize: '0.8125rem', fontWeight: 300, lineHeight: 1.6, color: 'var(--muted)' }}>{e.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--off-white)' }}>
          <div style={{ padding: '0.75rem 1.5rem', borderBottom: '1px solid var(--border)', fontFamily: 'var(--ff-mono)', fontSize: '0.5rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Education</div>
          {[
            { degree: 'MBA — Business Analytics', school: 'SRM Institute of Science & Technology', period: 'Sept 2024 – Present', detail: '9.57 CGPA · In progress' },
            { degree: 'B.Tech — Electronics & Communication', school: 'SRM Institute of Science & Technology', period: '2017 – 2021', detail: '76.5%' },
          ].map((e, i) => (
            <div key={i} style={{
              padding: '1.25rem 1.5rem',
              borderBottom: i === 0 ? '1px solid var(--border)' : 'none',
              display: 'flex', justifyContent: 'space-between',
              gap: '1rem', flexWrap: 'wrap', alignItems: 'center',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--black)', marginBottom: '0.2rem' }}>{e.degree}</div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>{e.school} · {e.period}</div>
              </div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem', color: 'var(--black)', fontWeight: 700 }}>{e.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
