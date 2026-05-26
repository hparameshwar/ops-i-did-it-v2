export default function Stack() {
  const groups = [
    {
      category: 'AI',
      color: 'var(--black)',
      textColor: 'var(--off-white)',
      accentColor: 'var(--accent)',
      tools: [
        { name: 'Claude', detail: 'Projects, Agents, Design System, Code' },
        { name: 'ChatGPT', detail: 'Projects, research workflows' },
      ],
    },
    {
      category: 'Project Management',
      color: 'var(--cream)',
      textColor: 'var(--black)',
      accentColor: 'rgba(13,13,13,0.4)',
      tools: [
        { name: 'ClickUp', detail: '2 dept architectures, 30+ custom fields, automations' },
        { name: 'Airtable', detail: '6-table schema, dashboards, cost tracking' },
        { name: 'Slack', detail: 'Bots, 19 Allocator commands, morning updates' },
      ],
    },
    {
      category: 'Automation',
      color: '#111827',
      textColor: 'var(--off-white)',
      accentColor: 'rgba(245,242,235,0.4)',
      tools: [
        { name: 'N8N', detail: 'Morning updates, Scout agent pipeline' },
        { name: 'ClickUp Automations', detail: 'Native triggers, consumption audited' },
        { name: 'Klaviyo', detail: 'Email upload pipeline via dev plugin' },
      ],
    },
    {
      category: 'Analytics',
      color: 'var(--cream)',
      textColor: 'var(--black)',
      accentColor: 'rgba(13,13,13,0.4)',
      tools: [
        { name: 'Airtable Dashboards', detail: 'Cost per email, utilization, daily trend' },
        { name: 'Google Sheets', detail: 'Pivot tables, Slack scorecard, capacity model' },
      ],
    },
    {
      category: 'Design & Docs',
      color: 'var(--black)',
      textColor: 'var(--off-white)',
      accentColor: 'var(--accent)',
      tools: [
        { name: 'Figma', detail: 'Client review boards, design system, custom plugin' },
        { name: 'Miro', detail: 'KT docs, brand context boards' },
        { name: 'Google Workspace', detail: 'Drive, Sheets, Docs — agent memory layer' },
      ],
    },
    {
      category: 'Deploy & Dev',
      color: '#111827',
      textColor: 'var(--off-white)',
      accentColor: 'rgba(245,242,235,0.4)',
      tools: [
        { name: 'Vercel', detail: 'Cerebro Portal — live' },
        { name: 'Railway', detail: 'Backend services' },
        { name: 'Chrome Plugin', detail: 'Custom-built for Slack/Figma data extraction' },
        { name: 'Figma Plugin', detail: 'HTML → Figma layer conversion (WIP)' },
      ],
    },
  ]

  return (
    <section id="stack" style={{ background: 'var(--off-white)' }}>
      <div className="container">

        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--muted)', marginBottom: '0.875rem',
          }}>
            <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />
            Tools used
          </div>
          <h2 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.01em',
            color: 'var(--black)',
          }}>The stack</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1rem',
        }}>
          {groups.map((g, gi) => (
            <div key={gi} style={{
              background: g.color,
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}>
              {/* category header */}
              <div style={{
                padding: '1rem 1.5rem',
                borderBottom: `1px solid ${g.textColor === 'var(--black)'
                  ? 'rgba(13,13,13,0.1)'
                  : 'rgba(255,255,255,0.07)'}`,
                fontFamily: 'var(--ff-mono)', fontSize: '0.625rem',
                fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: g.accentColor,
              }}>{g.category}</div>

              {/* tools */}
              <div style={{ padding: '0.5rem 0' }}>
                {g.tools.map((t, ti) => (
                  <div key={ti} style={{
                    padding: '0.875rem 1.5rem',
                    borderBottom: ti < g.tools.length - 1
                      ? `1px solid ${g.textColor === 'var(--black)'
                          ? 'rgba(13,13,13,0.06)'
                          : 'rgba(255,255,255,0.04)'}`
                      : 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}>
                    <div style={{
                      fontFamily: 'var(--ff-body)',
                      fontSize: '0.9375rem', fontWeight: 600,
                      color: g.textColor, lineHeight: 1.2,
                      flexShrink: 0,
                    }}>{t.name}</div>
                    <div style={{
                      fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem',
                      color: g.accentColor,
                      letterSpacing: '0.03em', lineHeight: 1.55,
                      textAlign: 'right', maxWidth: 200,
                    }}>{t.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
