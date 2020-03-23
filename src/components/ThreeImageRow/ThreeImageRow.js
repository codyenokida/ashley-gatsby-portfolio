import React from 'react'
import { Box, Image, Flex } from "rebass"
import { Fade } from "react-reveal"

import styles from "./ThreeImageRow.module.css"

const ThreeImageRow = ({ imageOne, imageTwo, imageThree }) => {
    return(
        <Flex 
            flexWrap="wrap"
            alignContent="center"
            justifyContent="center">
            <Fade>
                <Image src={imageOne} className={styles.image}></Image>
                <Image src={imageTwo} className={styles.image}></Image>
                <Image src={imageThree} className={styles.image}></Image>
            </Fade>
        </Flex>
    )
}

export default ThreeImageRow