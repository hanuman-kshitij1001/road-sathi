import React from 'react';
import { Card } from '../components/common/Card.jsx';
import { Badge } from '../components/common/Badge.jsx';
import { useHealthCheck } from '../hooks/useHealthCheck.js';

export const HomePage = () => {
  const { status: apiStatus, data: apiData } = useHealthCheck();

  const providerModules = [
    { title: 'Emergency Dispatch Hub', icon: '📡', desc: 'Real-time alert routing with SLA tracking and acceptance buttons.' },
    { title: 'Interactive Route Navigation', icon: '🧭', desc: 'Turn-by-turn navigation directly to stranded motorist GPS coordinates.' },
    { title: 'On-Site Diagnostic Toolkit', icon: '🧰', desc: 'Standardized checklist for battery, tire, engine, and towing checks.' },
    { title: 'Earnings & Settlement Ledger', icon: '💳', desc: 'Automated job payment calculations, bonuses, and weekly payouts.' },
  ];

  return (
    <div>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Badge variant="emerald" style={{ marginBottom: '1rem' }}>
          Provider & Partner Application
        </Badge>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
          Mechanic & Partner <span className="title-gradient-emerald">Operations</span>
        </h1>
        <p style={{ maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
          Production workspace foundation ready for mechanics, towing partners, and roadside service professionals.
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <Card title="Portal Specifications" subtitle="Independent Frontend Application">
          <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Port:</strong> 3001</li>
            <li><strong>Framework:</strong> React 18 + Vite</li>
            <li><strong>Package:</strong> @road-sathi/provider</li>
            <li><strong>Target Audience:</strong> Mechanics, Technicians, Tow Operators</li>
          </ul>
        </Card>

        <Card title="Core API Telemetry" subtitle="Backend Link Health">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span
              className="status-dot"
              style={{
                backgroundColor: apiStatus === 'connected' ? 'var(--accent-emerald)' : 'var(--accent-amber)',
                boxShadow: apiStatus === 'connected' ? '0 0 8px var(--accent-emerald)' : '0 0 8px var(--accent-amber)',
              }}
            />
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
              Core API: {apiStatus}
            </span>
          </div>
          {apiData ? (
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Connected to Core API v{apiData.version} ({apiData.environment})
            </p>
          ) : (
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Awaiting connection to Core API on port 5000.
            </p>
          )}
        </Card>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Planned Provider Workflows
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
          Modules to be implemented in <code>src/features/</code>:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {providerModules.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.25rem' }}>
              <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.5rem' }}>
                {item.icon}
              </span>
              <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
