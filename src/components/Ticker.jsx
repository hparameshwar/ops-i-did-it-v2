const items = [
  '₹34L/yr from restructuring',
  '500+ tasks via Allocator',
  '143 QM handoffs completed',
  '2+ hrs/day eliminated per agent',
  '₹1.5CR long-term savings',
  '10–15 brand digests/day',
  '75% input standardized',
  '40+ brands on structured workflow',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div aria-hidden="true" style={{
      background: 'var(--accent)',
      borderTop: '1.5px solid var(--black)',
      borderBottom: '1.5px solid var(--black)',
      overflow: 'hidden',
      paddingBlock: '0.8rem',
    }}>
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'ticker 34s linear infinite',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
            paddingInline: '2.25rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.75rem', fontWeight: 700,
            color: 'var(--black)', letterSpacing: '0.05em', textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            {item}
            <span style={{
              width: 5, height: 5, borderRadius: '50%',
              background: 'var(--black)', opacity: 0.35, flexShrink: 0,
            }} />
          </span>
        ))}
      </div>
    </div>
  )
}
