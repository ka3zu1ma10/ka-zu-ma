import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kazuma Saito - Web Product Designer</title>
        <meta name="description" content="Portfolio of Kazuma Saito, Web Product Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1>Kazuma Saito</h1>
        <h2>Web Product Designer</h2>

        <ul className="links">
          <li>
            <a href="https://twitter.com/ka3zu1ma10" target="_blank" rel="noopener noreferrer">
              X (Twitter)
            </a>
          </li>
          <li>
            <a href="https://note.com/ka3zu1ma10" target="_blank" rel="noopener noreferrer">
              Note
            </a>
          </li>
        </ul>

        <div style={{ marginTop: '2rem', borderTop: '1px solid #ddd', paddingTop: '1rem', width: '100%' }}>
            <Link href="/career">
                <a style={{ fontSize: '1rem', fontWeight: 'bold' }}>VIEW CAREER →</a>
            </Link>
        </div>
      </main>
    </div>
  )
}
