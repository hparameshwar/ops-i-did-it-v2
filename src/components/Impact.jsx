import SectionHeader from './SectionHeader'

const stats = [
  { num: '₹1.5', unit: 'CR', label: 'Long-term annual savings from D&D restructuring', detail: '₹2.83L/month · 6+ exits · merged under dept head' },
  { num: '₹34',  unit: 'L',  label: 'Immediate annual savings from role & resource cuts', detail: 'Allocator replaced Lead · 2 role exits' },
  { num: '12',   unit: 'hrs',label: 'Team capacity recovered daily — standup eliminated', detail: 'Agents handle all pre-10 AM D&D ops' },
  { num: '75',   unit: '%',  label: 'Input now standardized — QM processes without humans', detail: 'ClickUp forms · naming conventions · agent intake' },
  { num: '₹314', unit: '',   label: 'Cost per email exposed via Airtable dashboard', detail: '57% utilization · ₹1.54L/month idle capacity found' },
  { num: '1535', unit: '',   label: 'Designer records analyzed for performance scoring', detail: 'Data-backed keep/trim · ₹169–₹291 range exposed' },
  { num: '10–15',unit: '',   label: 'Brand digests completed per day via Claude pipeline', detail: 'KT doc → ClickUp → deep research → HTML attached' },
  { num: '0',    unit: '',   label: 'Escalations post client offload (~300 tasks/month)', detail: 'agency transition · freed full designer capacity' },
]

export default function Impact() {
  return (
    <section id="impact" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <SectionHeader label="By the numbers" title="Numbers that<br/>actually moved" />
        <div style={{
          display: 'grid',
          /* auto-fit: cells expand to fill row — no orphaned half-width cards */
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '1rem',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'var(--off-white)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.75rem 1.5rem',
              display: 'flex', flexDirection: 'column', gap: '0.375rem',
            }}>
              <div style={{
                fontFamily: 'var(--ff-display)', fontSize: '2.25rem',
                fontWeight: 800, letterSpacing: '-0.01em',
                color: 'var(--black)', lineHeight: 1,
              }}>
                {s.num}
                {s.unit && <span style={{ fontSize: '1.125rem', fontWeight: 400, opacity: 0.38 }}>{s.unit}</span>}
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.55, marginTop: '0.375rem' }}>{s.label}</p>
              <div style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem',
                color: 'var(--muted)', marginTop: 'auto', paddingTop: '0.875rem',
                borderTop: '1px solid var(--border)', letterSpacing: '0.04em', lineHeight: 1.6,
              }}>{s.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
