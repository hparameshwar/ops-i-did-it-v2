export default function Closing() {
  return (
    <section id="contact" style={{
      background: 'var(--accent)',
      paddingBlock: 'clamp(5rem, 10vw, 8rem)',
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
        gap: 'clamp(2rem, 5vw, 4rem)',
        alignItems: 'center',
      }}>
        {/* left */}
        <div>
          <h2 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800, lineHeight: 1.0,
            letterSpacing: '-0.01em', color: 'var(--black)',
            marginBottom: '1.25rem',
          }}>
            The build<br />isn't done.
          </h2>
          <p style={{
            fontSize: '1.0625rem', fontWeight: 300,
            lineHeight: 1.75, color: 'rgba(13,13,13,0.55)',
            maxWidth: 400,
          }}>
            Design system, Figma plugin, end-to-end client onboarding — all in progress.
            If you want to see the month-by-month thinking, it's in the journey tab.
          </p>
        </div>

        {/* right — contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="mailto:hparameshwarb@gmail.com" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '1rem',
            background: 'var(--black)', color: 'var(--accent)',
            fontWeight: 700, fontSize: '0.9375rem',
            padding: '1.25rem 1.75rem', borderRadius: 'var(--radius-sm)',
            textDecoration: 'none', letterSpacing: '0.01em',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem', letterSpacing: '0.04em' }}>hparameshwarb@gmail.com</span>
            <span>→</span>
          </a>
          <a href="tel:+917338810669" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '1rem',
            background: 'transparent', color: 'var(--black)',
            fontWeight: 700, fontSize: '0.9375rem',
            padding: '1.25rem 1.75rem', borderRadius: 'var(--radius-sm)',
            textDecoration: 'none', letterSpacing: '0.01em',
            border: '2px solid rgba(13,13,13,0.25)',
            transition: 'transform 0.2s, border-color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(13,13,13,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(13,13,13,0.25)'; }}
          >
            <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem', letterSpacing: '0.04em' }}>+91 73388 10669</span>
            <span>→</span>
          </a>
          <a href="#timeline" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem', fontWeight: 700,
            color: 'rgba(13,13,13,0.5)',
            textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '0.75rem',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--black)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(13,13,13,0.5)'}
          >
            See the month-by-month journey →
          </a>
        </div>
      </div>
    </section>
  )
}
