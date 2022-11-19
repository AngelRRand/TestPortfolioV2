import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PageLayoud from '../component/PageLayoud'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <PageLayoud title='Home'>

        <Link href={'/Home'}><h1>Home</h1></Link>

      </PageLayoud>

    </div>
  )
}
