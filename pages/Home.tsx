import React from 'react'
import Link from 'next/link'
import PageLayoud from '../component/PageLayoud'
import Stars from '../component/Stars'
import styles from '../styles/Home.module.css'
const Home = () => {
    return (
        <PageLayoud
            title='Explore to Galaxy!'
            content='Home portfolio'
            styleContainer='container_Galaxy'
        >
            <Stars/>
            <Link href={'/'}><h1>volver</h1></Link>
        </PageLayoud>
    )
}

export default Home