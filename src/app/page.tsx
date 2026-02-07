import Link from 'next/link';

export default function Home() {
  return (
    <div className="center-container">
      <div className="card">
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Kazuma Saito</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Product Designer</p>
        </div>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
          <a href="https://x.com/ka3zu1ma10" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '2px solid var(--primary-green)', paddingBottom: '4px', fontSize: '1.1rem', fontWeight: 500 }}>
            X (Twitter)
          </a>
          <a href="https://note.com/ka3zu1ma10" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '2px solid var(--primary-green)', paddingBottom: '4px', fontSize: '1.1rem', fontWeight: 500 }}>
            Note
          </a>
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <Link href="/experience" style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: 'var(--primary-green)',
            color: 'white',
            borderRadius: '50px',
            fontWeight: 600,
            fontSize: '1rem',
            transition: 'opacity 0.2s',
            textDecoration: 'none'
          }}>
            View Experience
          </Link>
        </div>
      </div>
    </div>
  );
}
