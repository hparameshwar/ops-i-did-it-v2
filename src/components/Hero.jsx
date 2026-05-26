export default function Hero() {
  return (
    <header id="home" style={{
      background: 'var(--black)',
      minHeight: '100svh',
      display: 'grid',
      alignItems: 'center',
      paddingTop: 'var(--nav-h)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--ff-display)',
        fontSize: 'clamp(80px, 20vw, 240px)',
        fontWeight: 800,
        color: 'rgba(255,255,255,0.025)',
        pointerEvents: 'none', userSelect: 'none',
        letterSpacing: '-0.01em', whiteSpace: 'nowrap',
      }}>SYSTEMS</div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingBlock: 'clamp(4rem, 8vw, 6rem)' }}>

        {/* role tags — explicit for recruiters */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          flexWrap: 'wrap', marginBottom: '2rem',
        }}>
          {['Strategy', 'Ops', 'Analytics', 'AI'].map((tag, i) => (
            <span key={i} style={{
              fontFamily: 'var(--ff-mono)', fontSize: '0.625rem', fontWeight: 700,
              color: i === 3 ? 'var(--black)' : 'rgba(245,242,235,0.6)',
              background: i === 3 ? 'var(--accent)' : 'transparent',
              border: i === 3 ? 'none' : '1px solid rgba(255,255,255,0.15)',
              padding: '0.3rem 0.75rem', borderRadius: 100,
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>{tag}</span>
          ))}
          <span style={{
            fontFamily: 'var(--ff-mono)', fontSize: '0.625rem',
            color: 'rgba(245,242,235,0.2)', letterSpacing: '0.06em',
            paddingLeft: '0.25rem',
          }}>· solo · 8 months</span>
        </div>

        {/* the one sentence */}
        <h1 style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
          fontWeight: 800, lineHeight: 1.0,
          letterSpacing: '-0.01em',
          color: 'var(--off-white)',
          maxWidth: 820, marginBottom: '2rem',
        }}>
          I joined a 40-brand agency<br />
          with no systems.<br />
          <span style={{ color: 'var(--accent)' }}>8 months later it runs<br />on 4 AI agents.</span>
        </h1>

        <p style={{
          fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.75,
          color: 'rgba(245,242,235,0.45)',
          maxWidth: 460, marginBottom: '3rem',
        }}>
          This is the thinking, the bets, and the proof.
          Month-by-month breakdown at the bottom.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#before" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--accent)', color: 'var(--black)',
            fontWeight: 700, fontSize: '0.9375rem',
            padding: '0.875rem 2rem', borderRadius: 'var(--radius-sm)',
            textDecoration: 'none', letterSpacing: '0.01em',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            See the build ↓
          </a>
          <a href="#timeline" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem', fontWeight: 700,
            color: 'rgba(245,242,235,0.4)',
            textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,242,235,0.4)'}
          >
            Jump to timeline →
          </a>
        </div>
      </div>

      {/* stat strip pinned to bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}>
        {[
          { num: '₹1.5CR', label: 'Annual savings' },
          { num: '4',      label: 'Agents in production' },
          { num: '500+',   label: 'Tasks automated' },
          { num: '12 hrs', label: 'Recovered daily' },
        ].map((s, i) => (
          <div key={i} style={{
            padding: '1.5rem clamp(1rem, 2vw, 2rem)',
            borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
          }}>
            <div style={{
              fontFamily: 'var(--ff-display)',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.625rem)',
              fontWeight: 800, letterSpacing: '-0.01em',
              color: 'var(--off-white)', lineHeight: 1, marginBottom: '0.375rem',
            }}>{s.num}</div>
            <div style={{
              fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem',
              color: 'rgba(245,242,235,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>{s.label}</div>
          </div>
        ))}
      </div>
    </header>
  )
}
