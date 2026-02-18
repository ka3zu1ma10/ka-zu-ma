'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    // Prevent flip if clicking on a link
    if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).closest('a')) return;
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Flip on Enter or Space
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="center-container">
      <div
        className={`flip-container ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-pressed={isFlipped}
        aria-label={isFlipped ? "Flip back to front" : "Flip card to view details"}
      >
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1rem', padding: '20px' }}>

              {/* Skills Section */}
              <div style={{ width: '100%', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '8px' }}>Skills</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                  {['UI/UX Design', 'Design Systems', 'Frontend Dev', 'Figma', 'Next.js'].map((skill) => (
                    <span key={skill} style={{
                      fontSize: '0.8rem',
                      padding: '4px 10px',
                      backgroundColor: '#f0f0f0',
                      borderRadius: '12px',
                      color: 'var(--text-primary)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Link */}
              <div style={{ margin: '1rem 0' }}>
                <Link href="/experience" style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  backgroundColor: 'var(--primary-green)',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'opacity 0.2s',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(51, 102, 51, 0.2)'
                }}>
                  View Experience
                </Link>
              </div>

              {/* Contact Section */}
              <div>
                <a href="https://x.com/ka3zu1ma10" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  borderBottom: '1px dotted var(--text-secondary)'
                }}>
                  <span>✉️ DM on X</span>
                </a>
              </div>

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
