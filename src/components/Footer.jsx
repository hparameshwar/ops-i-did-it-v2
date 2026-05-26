export default function Footer() {
  return (
    <footer style={{ background: 'var(--black)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap',
        gap: '1rem', paddingBlock: '2rem',
      }}>
        <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 800, fontSize: '0.9375rem', color: 'var(--off-white)', letterSpacing: '-0.01em' }}>Harish P</span>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="mailto:hparameshwarb@gmail.com" style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem', color: 'rgba(245,242,235,0.4)', letterSpacing: '0.04em', textDecoration: 'none', transition: 'color 0.18s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,242,235,0.4)'}
          >hparameshwarb@gmail.com</a>
          <a href="tel:+917338810669" style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem', color: 'rgba(245,242,235,0.4)', letterSpacing: '0.04em', textDecoration: 'none', transition: 'color 0.18s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,242,235,0.4)'}
          >+91 73388 10669</a>
        </div>
        <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem', color: 'rgba(245,242,235,0.2)', letterSpacing: '0.05em' }}>Strategy · Ops · Analytics · AI</span>
      </div>
    </footer>
  )
}
