import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Kazuma Saito',
  description: 'Professional experience of Kazuma Saito.',
};

export default function Experience() {
  return (
    <div className="center-container">
      <div className="card" style={{ maxWidth: '640px', padding: '40px 20px', textAlign: 'left' }}>
        <h1 style={{ color: 'var(--primary-green)', marginBottom: '3rem', textAlign: 'center' }}>Experience</h1>

        <div style={{ position: 'relative', paddingLeft: '20px' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '7px',
            top: '10px',
            bottom: '0',
            width: '2px',
            backgroundColor: '#e5e7eb'
          }}></div>

          {/* Role 1: Current */}
          <div style={{ position: 'relative', paddingLeft: '24px', marginBottom: '3rem' }}>
            <div style={{
              position: 'absolute',
              left: '-6.5px',
              top: '6px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-green)',
              border: '3px solid #fff',
              boxShadow: '0 0 0 2px var(--primary-green)'
            }}></div>
            <span style={{ fontSize: '1.2rem', color: 'var(--primary-green)', fontWeight: 700, display: 'block', marginBottom: '0.2rem' }}>2024.09 - Present</span>
            <div style={{ fontSize: '1rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '0.5rem' }}>Cybozu Inc.</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>プロダクトデザイナー (kintone)</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0.8rem' }}>
              kintoneの開発におけるプロダクトデザイン（UX/UI）全般を担当。
            </p>
            {/* Tech Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '0.8rem' }}>
              {['Figma', 'React', 'TypeScript', 'SCSS', 'A11y'].map(tech => (
                <span key={tech} style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#f3f4f6', color: '#555' }}>{tech}</span>
              ))}
            </div>
            {/* Achievements */}
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#444' }}>
              <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'start' }}>
                <span style={{ marginRight: '8px', color: 'var(--primary-green)' }}>✓</span>
                Design system components update for better accessibility.
              </li>
              <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'start' }}>
                <span style={{ marginRight: '8px', color: 'var(--primary-green)' }}>✓</span>
                Led the UI modernization project for core app features.
              </li>
            </ul>
          </div>

          {/* Role 2 */}
          <div style={{ position: 'relative', paddingLeft: '24px', marginBottom: '3rem' }}>
            <div style={{
              position: 'absolute',
              left: '-6.5px',
              top: '6px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              border: '3px solid #d1d5db'
            }}></div>
            <span style={{ fontSize: '1.1rem', color: '#1a1a1a', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>2021.01 - 2024.08</span>
            <div style={{ fontSize: '1rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '0.5rem' }}>Cybozu Inc.</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>デザインプログラムマネージャー (DPM)</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0.8rem' }}>
              デザイン組織の採用戦略立案・実行、広報、チームビルディングの推進。
            </p>
            {/* Tech Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '0.8rem' }}>
              {['Notion', 'Miro', 'Figma', 'HR Management'].map(tech => (
                <span key={tech} style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#f3f4f6', color: '#555' }}>{tech}</span>
              ))}
            </div>
            {/* Achievements */}
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#444' }}>
              <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'start' }}>
                <span style={{ marginRight: '8px', color: 'var(--primary-green)' }}>✓</span>
                Designed and executed hiring strategies, increasing team size by 150%.
              </li>
              <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'start' }}>
                <span style={{ marginRight: '8px', color: 'var(--primary-green)' }}>✓</span>
                Organized &quot;Cybozu Design Conference&quot; to boost employer branding.
              </li>
            </ul>
          </div>

          {/* Role 3 */}
          <div style={{ position: 'relative', paddingLeft: '24px', marginBottom: '1rem' }}>
            <div style={{
              position: 'absolute',
              left: '-6.5px',
              top: '6px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              border: '3px solid #d1d5db'
            }}></div>
            <span style={{ fontSize: '1.1rem', color: '#1a1a1a', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>2017.04 - 2020.12</span>
            <div style={{ fontSize: '1rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '0.5rem' }}>Cybozu Inc.</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>プロダクトデザイナー / フロントエンドエンジニア</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0.8rem' }}>
              「サイボウズ Office」の改善企画、ユーザーリサーチ、アクセシビリティ向上、実装。
            </p>
            {/* Tech Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '0.8rem' }}>
              {['Vue.js', 'Sass', 'PHP', 'jQuery', 'Figma'].map(tech => (
                <span key={tech} style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#f3f4f6', color: '#555' }}>{tech}</span>
              ))}
            </div>
            {/* Achievements */}
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#444' }}>
              <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'start' }}>
                <span style={{ marginRight: '8px', color: 'var(--primary-green)' }}>✓</span>
                Refactored legacy jQuery codebase to Vue.js, improving performance.
              </li>
              <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'start' }}>
                <span style={{ marginRight: '8px', color: 'var(--primary-green)' }}>✓</span>
                Conducted user research to identify pain points in mobile usage.
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee', textAlign: 'center' }}>
          <a href="/" style={{ color: 'var(--primary-green)', fontWeight: 600 }}>&larr; Back to Home</a>
        </div>
      </div>
    </div>
  );
}
