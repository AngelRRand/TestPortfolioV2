import React from 'react'
import StarsIMG from "../assets/Stars.gif"
import styles from './Stars.module.css'

import Image from 'next/image'
/* import { useRouter } from 'next/router' */

const Stars = ({ }) => {
    /* const router = useRouter()
    let currentRouter = router.asPath
     */
        return <Image
            src={StarsIMG}
            alt='Stars background web'
            className={styles.stars}
            priority={true}
        />
}

export default Stars