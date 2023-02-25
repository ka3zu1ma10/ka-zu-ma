import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getYear } from 'date-fns'

const date = function() {
  if(getYear(new Date()) > 2022){
    return "~"+getYear(new Date())
  }
}

const meta = {
  title:"KazuMax Site",
  description:"Kazuma Saitoの紹介サイトです。",
  type:"website",
  url:"https://ka-zu-ma.com/",
  image:"",
  locale:"ja_JP"
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{meta.title}</title>
        <meta charset="UTF-8" />
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="KazuMax" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content="/ogp.png" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:locale" content="ja_JP"  />
      </Head>
      <header className={styles.header}>
        <h1>KazuMax<img src="/mark.svg" alt="" role={'presentation'} className={styles.icon} /></h1>
      </header>
      <main className={styles.main}>
        <div>
          <img src="/mark.svg" alt="" role={'presentation'} className={styles.mark} />
          <div className={styles.name}>
            <h2 className={styles.nickname}>KazuMax</h2>
            <p className={styles.fullname}>Kazuma Saito</p>
          </div>
          <p className={styles.position}>kintoneをデザインするチームの人材マネージャー</p>
        </div>
        <div className={styles.introduction}>
          <p>kintoneをデザインするチームで、よりチームワークあふれるデザインチームになっていくのを支えることを主軸に活動しています。</p>
        </div>
        <section>
          <ul className={styles.sns_link__list}>
            <li className={styles.sns_link__list__item}>
              <a className={styles.twitter} href="https://twitter.com/ka3zu1ma10" target="_blank" rel="noopener noreferrer" aria-label='Twitter'>
                <img role="image" src="/twitter.svg" aria-hidden="true" />
              </a>
            </li>
            <li className={styles.sns_link__list__item}>
              <a className={styles.facebook} href="https://www.facebook.com/ka3zu1ma10" target="_blank" rel="noopener noreferrer" aria-label='Facebook'>
                <img role="image" src="/facebook.png" aria-hidden="true" />
              </a>
            </li>
            <li className={styles.sns_link__list__item}>
              <a className={styles.note} href="https://note.com/ka3zu1ma10" target="_blank" rel="noopener noreferrer" aria-label='note'>
                <img role="image" src="/note.svg" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
