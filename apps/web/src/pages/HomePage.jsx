import React from 'react';
import { Card } from '../components/common/Card.jsx';
import { Badge } from '../components/common/Badge.jsx';
import { useHealthCheck } from '../hooks/useHealthCheck.js';

export const HomePage = () => {
  const { status: apiStatus, data: apiData } = useHealthCheck();

  const servicesPlanned = [
    { title: 'Mechanic Assistance', icon: '🔧', desc: 'On-demand mechanical diagnostics and emergency repairs.' },
    { title: 'Puncture Repair', icon: '🚗', desc: 'Rapid tire change, plug repair, and pressure top-up.' },
    { title: 'Towing Services', icon: '🚛', desc: 'Flatbed and wheel-lift towing to preferred workshops.' },
    { title: 'Battery Jump-Start', icon: '⚡', desc: 'Dead battery recharge and immediate diagnostic check.' },
    { title: 'Fuel Delivery', icon: '⛽', desc: 'Emergency petrol/diesel dispatch directly to your vehicle.' },
    { title: 'EV Mobile Charging', icon: '🔋', desc: 'On-site emergency mobile charging units for EV range.' },
  ];

  return (
    <div>
      {/* Hero Announcement */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Badge variant="amber" style={{ marginBottom: '1rem' }}>
          Production Architecture Foundation
        </Badge>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
          Road-Sathi <span className="title-gradient">User Platform</span>
        </h1>
        <p style={{ maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
          Architectural foundation established for scalable on-demand roadside assistance.
          Ready for domain feature modules.
        </p>
      </section>

      {/* Architecture Diagnostics Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <Card title="System Architecture" subtitle="Monorepo Workspaces Ready">
          <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Frontend:</strong> React 18 + Vite</li>
            <li><strong>Styling:</strong> Vanilla CSS Design System</li>
            <li><strong>Separation:</strong> Components &bull; Layouts &bull; Features &bull; Store</li>
            <li><strong>Shared Packages:</strong> @road-sathi/shared, config, types</li>
          </ul>
        </Card>

        <Card title="API Service Connection" subtitle="Real-time backend probe">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span
              className="status-dot"
              style={{
                backgroundColor: apiStatus === 'connected' ? 'var(--accent-emerald)' : 'var(--accent-amber)',
                boxShadow: apiStatus === 'connected' ? '0 0 8px var(--accent-emerald)' : '0 0 8px var(--accent-amber)',
              }}
            />
            <span style={{ fontWeight: 600, textTransform: 'capitalize', color: 'var(--text-primary)' }}>
              API Status: {apiStatus}
            </span>
          </div>
          {apiData && (
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Uptime: {Math.round(apiData.uptime)}s | Env: {apiData.environment} | Version: {apiData.version}
            </p>
          )}
          {!apiData && (
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Ensure Core API is started on port 5000 (`npm run dev:api`).
            </p>
          )}
        </Card>
      </section>

      {/* Planned Emergency Services Roadmap */}
      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Planned Assistance Services
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
          Domain modules ready to be integrated into <code>src/features/</code> in subsequent phases:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {servicesPlanned.map((item, idx) => (
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
