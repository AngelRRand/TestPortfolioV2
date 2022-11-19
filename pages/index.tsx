import Link from 'next/link'
import PageLayoud from '../component/PageLayoud'


export default function Home() {
  return (
    <PageLayoud
      title='Welcome To Galaxy!'
      content='Iniciar portfolio'
      styleContainer='container_Space'
    >

      <Link href={'/Home'}><h1>Home</h1></Link>

    </PageLayoud>
  )
}
