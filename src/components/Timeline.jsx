export default function Timeline() {
  const months = [
    {
      period: 'Oct 2025',
      theme: 'Build the foundation',
      items: [
        'Built complete ClickUp space structure for Email Marketing — zones, statuses, custom fields, workflows across 40+ brands',
        'Built ClickUp architecture for D&D — 12 zones, 30+ custom fields, status workflows',
        'Built Slack scorecard dashboard — formalized team DM vs public comms ratio into Google Sheets with pivot tables and weekly history',
      ],
    },
    {
      period: 'Nov 2025',
      theme: 'Understand the real workflows',
      items: [
        'Synced 1-on-1 with every team member — mapped actual day-to-day workflows, bottlenecks, and handoffs',
        'Standardized ClickUp usage org-wide — statuses, conventions, what goes where',
        'Analyzed client escalation patterns across all channels — frequency, root cause, response time',
        'Ran onboarding for new joiners — ClickUp walkthrough, process overview, team introductions',
        'Collated performance stats across clients for marketing case studies',
      ],
    },
    {
      period: 'Dec 2025',
      theme: 'Clean the intake funnel',
      items: [
        'Revamped all client channels — (N) prefixed folders, dedicated lists, standardized statuses across all D&D clients',
        'Sourced all client/brand data — websites, internal and external review boards, Google Sheet mapping per client',
      ],
    },
    {
      period: 'Jan – Feb 2026',
      theme: 'Wire the data layer',
      items: [
        'Consolidated all client review boards into single files per client — password protected externally',
        'Built ClickUp-to-Airtable multi-entry pipeline — real-time designer output tracking per task',
        'Designed full Airtable schema from scratch — 6 tables, all fields, relationships, and automations',
        'Standardized intake forms for email clients — 75% of input now agent-readable',
        'Transitioned team to alias IDs on ClickUp for cleaner access management',
        'Audited all ClickUp automations — removed redundant triggers, stayed within plan limits',
        'Built dev plugin — 70% of dev workflow automated (slicing, compression, Klaviyo upload)',
        'Led Zolanah offload to external agency — ~300 tasks/month, zero escalations post-transition',
      ],
    },
    {
      period: 'Mar 2026',
      theme: 'Ship the agents, surface the numbers',
      items: [
        'Shipped Quartermaster — task validation, brand extraction, auto-fill, handoff to Forge. 143 handoffs, 15+ clients',
        'Shipped Forge — task creation from 4 copy sources, attachments, task linking. 105+ tasks, 12+ clients',
        'Shipped Allocator — routing by brand history and CU capacity, 19 Slack commands. 500+ tasks, Lead role eliminated',
        'Shipped Scout — EM deadline mismatch flagging. Deployed, converting to N8N',
        'Built Airtable cost dashboard — exposed ₹314/email, 57% utilization, ₹1.54L/month idle',
        'Analyzed 1535 designer records — volume, efficiency, revision rate per designer',
        'Built 6-month client volume analysis — keep/fire mapping, capacity modeling',
        'Proposed D&D restructuring — 3 options with full cost comparison. ₹40–46L/year savings identified',
        'Built CU capacity model — 1 CU = 40 min, per-designer caps, health bands',
        'Shipped Cerebro Portal — Brand Hub, Analytics, Planning, Brief Gen, Client Portal. Live on Vercel',
        'Built QA brand checklists from 6 months of Slack complaint history — every item traceable to a real client complaint',
        'N8N morning updates — per-client automated Slack updates, bucketed by type',
        'Standup eliminated — agents handle all pre-10 AM D&D ops. 12 hrs team capacity recovered daily',
      ],
    },
    {
      period: 'Apr – May 2026',
      theme: 'Centralize and build what\'s next',
      items: [
        'Managed full D&D department exit — KT collected from AMs, CSMs, designers, and department head',
        'Built brand digest pipeline — KT docs → Claude project → HTML digest. 10–15 brands/day',
        'Set up per-client Claude Projects as persistent contextual memory across 40+ brands',
        'Built workspace navigation guide and QA checklists from Slack history',
        'Claude design system in progress — per-brand, fed with .fig files and Figma comments',
        'Figma conversion plugin in progress — HTML to exact Figma layers, no fallbacks',
        'End-to-end client onboarding pipeline in progress — sales handoff to strategy lock',
      ],
      wip: true,
    },
  ]

  return (
    <section id="timeline" style={{ background: 'var(--black)', color: 'var(--off-white)' }}>
      <div className="container">

        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(245,242,235,0.35)', marginBottom: '0.875rem',
          }}>
            <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />
            Month by month
          </div>
          <h2 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.01em',
            color: 'var(--off-white)',
          }}>The full sequence</h2>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {months.map((m, i) => (
            <div key={i} style={{
              background: 'var(--black)',
              padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              display: 'grid',
              gridTemplateColumns: 'clamp(120px, 18%, 200px) 1fr',
              gap: 'clamp(1.5rem, 4vw, 3rem)',
              alignItems: 'start',
            }}>
              <div style={{ paddingTop: '0.125rem' }}>
                <div style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.625rem',
                  color: m.wip ? '#fcd34d' : 'rgba(245,242,235,0.3)',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>{m.period}</div>
                <div style={{
                  fontFamily: 'var(--ff-display)', fontSize: '0.9375rem',
                  fontWeight: 700, letterSpacing: '-0.01em',
                  color: m.wip ? '#fcd34d' : 'var(--accent)',
                  lineHeight: 1.2,
                }}>{m.theme}</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {m.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{
                      width: 4, height: 4, borderRadius: '50%',
                      background: m.wip ? '#fcd34d' : 'rgba(200,242,90,0.5)',
                      flexShrink: 0, marginTop: '0.55rem',
                    }} />
                    <span style={{
                      fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.65,
                      color: 'rgba(245,242,235,0.65)',
                    }}>{item}</span>
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
