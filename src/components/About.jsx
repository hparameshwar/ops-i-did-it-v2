export default function About() {
  const stats = [
    { num: '₹56L',  label: 'Savings surfaced from data most orgs never look at' },
    { num: '500+',  label: 'Tasks automated across 4 agents in production' },
    { num: 'US · ME · EU', label: 'Client geographies managed remotely from Bangalore' },
    { num: '12 hrs',label: 'Of daily team capacity recovered' },
  ]

  const principles = [
    { num: '01', title: 'Outcome before activity', proof: '₹56L identified before anyone asked' },
    { num: '02', title: 'Foundation before automation', proof: '5 months of groundwork before agent 1 shipped' },
    { num: '03', title: 'Make the invisible visible', proof: '₹314/email cost — buried, then surfaced' },
    { num: '04', title: 'Ambiguity in, clarity out', proof: 'Network eng → fitness tech → agency ops' },
  ]

  const life = [
    { emoji: '🏃', label: 'Running', detail: 'Marathons. Currently on a break.' },
    { emoji: '🍳', label: 'Cooking', detail: 'North Indian. Dal makhani on Sundays.' },
    { emoji: '🏍️', label: 'Riding', detail: 'Blr · Chennai · Pondi · Mysore.' },
    { emoji: '📍', label: 'Based', detail: 'Chennai roots. Bangalore life.' },
  ]

  return (
    <section id="about" style={{ background: 'var(--black)', color: 'var(--off-white)', paddingTop: 'calc(var(--nav-h) + 4rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
      <div className="container">

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {['Strategy', 'Ops', 'Analytics', 'AI'].map((t, i) => (
            <span key={i} style={{
              fontFamily: 'var(--ff-mono)', fontSize: '0.625rem', fontWeight: 700,
              color: i === 3 ? 'var(--black)' : 'rgba(245,242,235,0.55)',
              background: i === 3 ? 'var(--accent)' : 'transparent',
              border: i === 3 ? 'none' : '1px solid rgba(255,255,255,0.15)',
              padding: '0.3rem 0.75rem', borderRadius: 100,
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>{t}</span>
          ))}
          <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.625rem', color: 'rgba(245,242,235,0.2)', letterSpacing: '0.06em', alignSelf: 'center' }}>· Chennai / Bangalore · MBA Business Analytics</span>
        </div>

        {/* Hero + contact */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'end',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
        }}>
          <div>
            <h1 style={{
              fontFamily: 'var(--ff-display)', fontWeight: 900,
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              lineHeight: 1.0, letterSpacing: '-0.01em',
              color: 'var(--off-white)', marginBottom: '1.25rem',
            }}>
              Systems that create<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>clarity.</em><br />
              Numbers that justify<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>decisions.</em>
            </h1>
            <p style={{
              fontSize: '1rem', fontWeight: 300, lineHeight: 1.75,
              color: 'rgba(245,242,235,0.5)', maxWidth: 440,
            }}>
              Cross-functional operator working with US, Middle East and EU clients from Bangalore.
              Built the analytics layer that exposed ₹56L in savings — from data that existed
              but nobody had made sense of.
            </p>
          </div>

          {/* Contact */}
          <div style={{
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 'var(--radius-lg)', padding: '1.75rem',
            display: 'flex', flexDirection: 'column', gap: '1rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: '#6ee7b7',
                boxShadow: '0 0 0 3px rgba(110,231,183,0.2)',
                animation: 'pulse 2s ease-in-out infinite', flexShrink: 0,
              }} />
              <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.625rem', color: 'rgba(245,242,235,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Open to the right opportunity</span>
            </div>
            {[
              { label: 'Email',    val: 'hparameshwarb@gmail.com', href: 'mailto:hparameshwarb@gmail.com', accent: true },
              { label: 'Phone',    val: '+91 73388 10669',          href: 'tel:+917338810669',             accent: true },
              { label: 'Location', val: 'Bangalore, India',         href: null },
              { label: 'Notice',   val: '1 month',                  href: null },
            ].map((r, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                gap: '1rem', paddingTop: '0.75rem',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>
                <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', color: 'rgba(245,242,235,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{r.label}</span>
                {r.href
                  ? <a href={r.href} style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.02em' }}>{r.val}</a>
                  : <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem', color: 'rgba(245,242,235,0.65)', letterSpacing: '0.02em' }}>{r.val}</span>
                }
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.07)',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <div style={{ fontFamily: 'var(--ff-body)', fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: 700, color: 'var(--off-white)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.num}</div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5rem', color: 'rgba(245,242,235,0.3)', letterSpacing: '0.06em', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* How I work — graphical */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(245,242,235,0.35)', marginBottom: '1.5rem',
          }}>
            <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />
            How I work
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '1px', background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          }}>
            {principles.map((p, i) => (
              <div key={i} style={{
                background: 'var(--black)',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between', gap: '2rem',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* big ghost number */}
                <div aria-hidden="true" style={{
                  position: 'absolute', right: '-0.5rem', top: '-0.75rem',
                  fontFamily: 'var(--ff-display)', fontSize: '6rem', fontWeight: 900,
                  color: 'rgba(255,255,255,0.03)', lineHeight: 1, pointerEvents: 'none',
                }}>{p.num}</div>

                <div style={{
                  fontFamily: 'var(--ff-display)', fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                  fontWeight: 800, letterSpacing: '-0.01em',
                  color: 'var(--off-white)', lineHeight: 1.2,
                }}>{p.title}</div>

                {/* proof chip */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: 'rgba(200,242,90,0.08)',
                  border: '1px solid rgba(200,242,90,0.2)',
                  padding: '0.375rem 0.75rem', borderRadius: 100,
                  width: 'fit-content',
                }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>{p.proof}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outside work */}
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(245,242,235,0.35)', marginBottom: '1.5rem',
          }}>
            <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />
            Outside work
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '1rem',
          }}>
            {life.map((l, i) => (
              <div key={i} style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-md)', padding: '1.25rem 1.5rem',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.625rem' }}>{l.emoji}</div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--off-white)', marginBottom: '0.25rem' }}>{l.label}</div>
                <p style={{ fontSize: '0.8125rem', fontWeight: 300, lineHeight: 1.6, color: 'rgba(245,242,235,0.4)' }}>{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
