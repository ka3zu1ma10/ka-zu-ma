import Head from 'next/head'
import Link from 'next/link'

export default function Career() {
  return (
    <div className="container">
      <Head>
        <title>Career - Kazuma Saito</title>
        <meta name="description" content="Career history of Kazuma Saito" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="main">
        <h1>CAREER HISTORY</h1>
        
        <h2>Experience</h2>
        <div className="career-list">
           <div className="career-company">
             <h3 className="company-name">Cybozu, Inc.</h3>
             <span className="company-period">2017.04 - Present</span>
           </div>

          <div className="career-item">
            <div className="year">2024.09 - Present</div>
            <h3 className="role">Product Designer (kintone)</h3>
            <p className="description">
              kintoneの開発チームにて、プロダクトデザインを担当。
            </p>
          </div>

          <div className="career-item">
            <div className="year">2021.01 - 2024.08</div>
            <h3 className="role">Design Program Manager (DPM)</h3>
            <p className="description">
              デザイン組織全体の採用戦略の立案・実行。<br/>
              組織内のコミュニケーション活性化およびチームビルディングの推進。
            </p>
          </div>

           <div className="career-item">
            <div className="year">2017.04 - 2020.12</div>
            <h3 className="role">Product Designer / Front-end Developer</h3>
            <p className="description">
              「サイボウズ Office」の改善（企画・リサーチ・デザイン・アクセシビリティ向上）。<br/>
              Vue.jsを用いたプロダクトのフロントエンド刷新・実装。<br/>
              デザイナー採用イベントの企画・運営、ユーザビリティテストの体制構築。
            </p>
          </div>
        </div>

        <h2>Education</h2>
        <div className="career-list" style={{ marginTop: '1rem' }}>
          <div className="career-item">
            <div className="year">2017.03 卒業</div>
            <h3 className="role">大阪芸術大学 芸術学部 デザイン学科</h3>
          </div>
        </div>

        <div className="back-link-container">
          <Link href="/">
            <a className="back-link">← Back to Home</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
