import SectionHeader from './SectionHeader'

const steps = [
  {
    num: '01',
    title: 'KT docs collected from all stakeholders',
    desc: 'AMs, CSMs, designers, department heads — all KT docs gathered during the department exit. Client Slack history, Figma comments, and Miro boards downloaded via custom-built plugins.',
    tools: ['Slack', 'Figma', 'Miro', 'Custom plugin'],
  },
  {
    num: '02',
    title: 'Claude project ingests everything',
    desc: 'Dedicated Claude project with pre-wired instructions. Feed the brand list — it reads KT docs, creates ClickUp tasks, attaches Miro links and copy docs. One prompt, end to end.',
    tools: ['Claude Projects', 'ClickUp'],
  },
  {
    num: '03',
    title: 'Deep research across all channels',
    desc: 'Fetches the task, reads the KT doc, screenshots Figma designs for reference, then runs deep research across all Slack history — public and internal — for every occurrence of the brand.',
    tools: ['Figma', 'Slack', 'ClickUp'],
  },
  {
    num: '04',
    title: 'Brand digest HTML generated and attached',
    desc: "Complete output: do's, don'ts, redirect links, contextual history, recent work summary. Downloaded as HTML, attached to the ClickUp task. 10–15 brands done every day.",
    tools: ['HTML output', 'ClickUp attachment'],
  },
]

export default function Workflow() {
  return (
    <section id="workflow" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <SectionHeader label="How it actually works" title="The brand digest<br/>pipeline" />
        {/* fix: added width 100% so maxWidth actually constrains on mobile */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 720 }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '52px 1fr',
              gap: '1.5rem',
              paddingBottom: i < steps.length - 1 ? '3rem' : 0,
              position: 'relative',
            }}>
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', left: 25, top: 52, bottom: 0,
                  width: '1.5px',
                  backgroundImage: 'repeating-linear-gradient(to bottom, rgba(13,13,13,0.15) 0px, rgba(13,13,13,0.15) 4px, transparent 4px, transparent 12px)',
                }} />
              )}
              <div style={{
                width: 52, height: 52, background: 'var(--black)',
                color: 'var(--accent)', borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--ff-display)', fontSize: '1.125rem', fontWeight: 800,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }} aria-hidden="true">{step.num}</div>

              <div style={{ paddingTop: '0.875rem' }}>
                <div style={{
                  fontFamily: 'var(--ff-display)', fontSize: '1.0625rem',
                  fontWeight: 700, letterSpacing: '-0.015em',
                  marginBottom: '0.625rem', color: 'var(--black)',
                }}>{step.title}</div>
                <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.75, color: 'var(--muted)', marginBottom: '1rem' }}>{step.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {step.tools.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem', fontWeight: 700,
                      padding: '0.3rem 0.65rem',
                      background: 'var(--black)', color: 'var(--accent)',
                      borderRadius: '0.25rem', letterSpacing: '0.05em', textTransform: 'uppercase',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
