import React from 'react'
import { Box, Image, Flex } from "rebass"
import { Fade } from "react-reveal"

import styles from "./BannerImageRow.module.css"

const BannerImageRow = ({ bannerImage }) => {
    return(
        <Flex 
            flexWrap="wrap"
            alignContent="center"
            justifyContent="center">
            <Fade>
                <Image src={bannerImage} className={styles.image}></Image>
            </Fade>
        </Flex>
    )
}

export default BannerImageRow