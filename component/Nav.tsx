import React from 'react'
import { motion } from "framer-motion";
import styles from './Nav.module.css';
import { useRouter } from 'next/router'

const Nav = () => {

    const router = useRouter()
    let currentRouter = router.asPath

    
    if(currentRouter === '/'){
        return <></>
    }else{
        return (
            <header className='CAJA'>
                <nav>NAV</nav>
            </header>
        )
    }
}

export default Nav