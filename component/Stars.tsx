import React from 'react'
import StarsIMG from "../assets/Stars.gif"
import styles from './PageLayoud.module.css'

import Image from 'next/image'
import { useRouter } from 'next/router'

const Stars = ({ }) => {
    const router = useRouter()
    console.log(router.asPath)
    return (
        <div>
            <Image
                src={StarsIMG}
                alt='Stars background web'
                className={`${styles.stars}`}
            />
        </div>
    )
}

export default Stars