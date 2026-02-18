'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    // Prevent flip if clicking on a link
    if ((e.target as HTMLElement).tagName === 'A') return;
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="center-container">
      <div className={`flip-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flipper">
          {/* Front of the card */}
          <div className="card front">
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
            
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', color: 'var(--primary-green)', fontSize: '0.9rem', opacity: 0.7, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>↻ Flip</span>
            </div>
          </div>

          {/* Back of the card */}
          <div className="card back">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-green)', marginBottom: '1rem' }}>Experience & Works</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '80%' }}>
                Take a look at my professional journey and portfolio.
              </p>
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
             <div style={{ position: 'absolute', bottom: '20px', right: '20px', color: 'var(--primary-green)', fontSize: '0.9rem', opacity: 0.7, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>↻ Back</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
