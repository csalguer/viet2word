import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import AudioControls from '@/components/AudioControls'
import type { ReactElement } from 'react'

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>Test Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <AudioControls />
      </main>
    </>
  )
}
