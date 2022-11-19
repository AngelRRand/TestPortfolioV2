import Link from 'next/link'
import PageLayoud from '../component/PageLayoud'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <PageLayoud 
        title='Welcome To Galaxy!'
        content='Iniciar portfolio'
      >

        <Link href={'/Home'}><h1>Home</h1></Link>

      </PageLayoud>

    </div>
  )
}
