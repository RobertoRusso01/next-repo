import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App Sac Catania</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Sample <a href="https://nextjs.org">Next.js ✈️ Sac Catania </a> app!
        </h1>
        <p>by 🖥️<a href="https://robertorussowebdev.it">Roberto Russo Cloud Architect 👷🏻‍♂️</a></p>
      </main>
    </div>
  )
}
 