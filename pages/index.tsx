import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nothing here
        </h1>

        <p className={styles.description}>
          Try <strong>npm run storybook</strong>
        </p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
