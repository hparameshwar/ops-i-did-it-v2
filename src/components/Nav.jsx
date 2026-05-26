import { useState } from 'react'

const links = [
  { href: '#about',   label: 'About'   },
  { href: '#journey', label: 'Journey' },
  { href: '#stack',   label: 'Stack'   },
  { href: '#books',   label: 'Books'   },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav style={{
        position: 'fixed', inset: '0 0 auto 0', zIndex: 200,
        height: 'var(--nav-h)',
        background: 'rgba(13,13,13,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '100%', maxWidth: 1160, marginInline: 'auto',
          paddingInline: 'clamp(1.5rem, 6vw, 3.5rem)',
        }}>
          <a href="#" style={{
            fontFamily: 'var(--ff-display)', fontWeight: 800, fontSize: '1rem',
            letterSpacing: '-0.01em', textDecoration: 'none', color: 'var(--off-white)',
          }}>Harish P ✦</a>

          <ul className="nav-links" role="list" style={{ margin: 0 }}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.6rem',
                  fontWeight: 700, color: 'rgba(245,242,235,0.4)', textDecoration: 'none',
                  letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.18s',
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--off-white)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(245,242,235,0.4)'}
                >{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#journey" style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', fontWeight: 700,
                color: 'var(--black)', background: 'var(--accent)',
                padding: '0.35rem 0.875rem', borderRadius: 100,
                textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>Resume ↗</a>
            </li>
          </ul>

          <button className="hamburger" aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}>
            <span style={{ background: 'var(--off-white)', transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
            <span style={{ background: 'var(--off-white)', opacity: open ? 0 : 1 }} />
            <span style={{ background: 'var(--off-white)', transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`} style={{ background: 'rgba(13,13,13,0.97)' }} aria-hidden={!open}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close} style={{ color: 'var(--off-white)' }}>{l.label}</a>
        ))}
        <a href="#journey" onClick={close} style={{ color: 'var(--accent)' }}>Resume</a>
      </div>
    </>
  )
}
