export default function SectionHeader({ label, title, light = false }) {
  const parts = title.split('<br/>')
  return (
    <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: light ? 'rgba(245,242,235,0.35)' : 'var(--muted)',
        marginBottom: '0.875rem',
      }}>
        <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor', flexShrink: 0 }} />
        {label}
      </div>
      <h2 style={{
        fontFamily: 'var(--ff-display)',
        /* tighter ceiling — was 3.5rem, now 2.75rem max */
        fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: '-0.01em',
        color: light ? 'var(--off-white)' : 'var(--black)',
        maxWidth: 640,
        overflowWrap: 'break-word',
      }}>
        {parts.map((part, i) => (
          <span key={i}>{part}{i < parts.length - 1 && <br />}</span>
        ))}
      </h2>
    </div>
  )
}
