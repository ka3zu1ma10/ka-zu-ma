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
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              kintoneの開発におけるプロダクトデザイン（UX/UI）全般を担当。
            </p>
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
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              デザイン組織の採用戦略立案・実行、広報、チームビルディングの推進。
            </p>
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
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li>「サイボウズ Office」の改善企画、ユーザーリサーチ、アクセシビリティ向上。</li>
              <li>Vue.jsを用いたフロントエンド刷新の実装および、デザイン組織の採用広報活動。</li>
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
