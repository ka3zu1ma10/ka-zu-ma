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
  description:"kazuMax(Kazuma Saito)の紹介サイトです。",
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
        <h1>KazuMax</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.hero}>笑えるチームを<br aria-hidden="true" />デザインする</h2>
        </section>
        <section className={styles.section}>
          <h2 className={styles.nickName}>KazuMax</h2>
          <p className={styles.name}>Kazuma Saito</p>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>私にできること</h3> 
          <div className={styles.sectionBody}>
            <p className={styles.sectionText}>
              チームで仕事をするメンバーが<br aria-hidden="true" />
              楽しくデザイン業務に集中できる<br aria-hidden="true" />
              そんな環境を提供するために活動します
            </p>
            <p className={styles.sectionText}>
              業務の問題点をヒアリングで探り<br aria-hidden="true" />
              チームの状態と、メンバーのモチベーションを<br aria-hidden="true" />
              より良い状態にするために<br aria-hidden="true" />
              必要なことを整理し、先導しながら進めていきます
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>経歴</h3> 
          <table className={styles.sectionTable}>
            <tbody>
              <tr>
                <th>1994</th>
                <td>奈良県で生まれる</td>
              </tr>
              <tr>
                <th>2017</th>
                <td><a href="https://cybozu.co.jp/" target="_blank" rel="noreferrer">サイボウズ株式会社</a>にUX/UIデザイナーとして入社</td>
              </tr>
              <tr>
                <th>2020~2021</th>
                <td><a href="https://office.cybozu.co.jp/" target="_blank" rel="noreferrer">サイボウズ Office</a>をデザインするチームでプロダクトデザイナーとして活動</td>
              </tr>
              <tr>
                <th>2022{date()}</th>
                <td><a href="https://kintone.cybozu.co.jp/" target="_blank" rel="noreferrer">kintone</a>をデザインするチームでデザインプログラムマネージャーとして活動 </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>発信</h3>
          <ul className={[styles.sectionBody,styles.snsList].join(" ")}>
            <li>
              <a href="https://twitter.com/ka3zu1ma10" target="_blank" rel="noreferrer" className={styles.snsLink}>
                <img src="/twitter.svg" alt="" />
                <p className={styles.sectionText}>
                  Twitter<br aria-hidden="true" />
                  何気ないことを発信
                </p>
                </a>
            </li>
            <li>
              <a href="https://note.com/cy_kazuma" target="_blank" rel="noreferrer" className={styles.snsLink}>
                <img src="/note.svg" alt="" />
                <p className={styles.sectionText}>
                  Note<br aria-hidden="true" />
                  ブログっぽく自分の経験などを発信
                </p>
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>連絡</h3>
          <div className={styles.sectionBody}>
            <p className={styles.sectionText}>Twitterで気軽にDMしてください</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
      </footer>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;400;500&display=swap" rel="stylesheet" />
    </div>
  )
}
