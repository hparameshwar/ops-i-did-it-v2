const books = [
  { title: 'The Art of Thinking Clearly', author: 'Rolf Dobelli', color: '#1e3a5f', lesson: 'Every decision has a bias attached. Knowing which one is operating is more useful than any framework.' },
  { title: 'The Great Mental Models', author: 'Shane Parrish', color: '#3d2b1f', lesson: 'The same problem through a different model becomes a different problem — and often a solvable one.' },
  { title: 'Contagious', author: 'Jonah Berger', color: '#1f3d2b', lesson: 'Things spread not because they\'re good, but because they make people feel something. Design for that.' },
  { title: 'Mindset', author: 'Carol Dweck', color: '#3d1f2b', lesson: 'The moment you believe a skill is fixed is the moment you stop building it.' },
  { title: 'The Art of Selling', author: 'Various', color: '#2b1f3d', lesson: 'Every ops proposal is a sale. Lead with the outcome the other person cares about.' },
  { title: 'High Output Management', author: 'Andy Grove', color: '#1f2b3d', lesson: 'A manager\'s output is the team\'s output. Standups instead of work is a system failure, not culture.' },
  { title: 'Radical Candor', author: 'Kim Scott', color: '#3d2b1f', lesson: 'Care personally, challenge directly. One without the other is either manipulation or neglect.' },
  { title: 'Manifest', author: 'Roxie Nafousi', color: '#1f3d1f', lesson: 'Clarity about where you\'re going is a prerequisite for good decisions about what to do today.' },
]

export default function Books() {
  return (
    <section id="books" style={{ background: 'var(--black)', color: 'var(--off-white)', paddingBlock: 'clamp(5rem, 10vw, 8rem)' }}>
      <div className="container">
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(245,242,235,0.35)', marginBottom: '0.875rem',
          }}>
            <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />
            What I'm reading
          </div>
          <h2 style={{
            fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.01em',
            color: 'var(--off-white)',
          }}>One lesson per book.<br />Not a summary.</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        }}>
          {books.map((b, i) => (
            <div key={i} style={{
              background: 'var(--black)',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
              borderLeft: `3px solid ${b.color}`,
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#0f0f0f'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--black)'}
            >
              <div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--off-white)', lineHeight: 1.2, marginBottom: '0.25rem' }}>{b.title}</div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', color: 'rgba(245,242,235,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{b.author}</div>
              </div>
              <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.1)' }} />
              <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,242,235,0.55)', fontStyle: 'italic' }}>"{b.lesson}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
