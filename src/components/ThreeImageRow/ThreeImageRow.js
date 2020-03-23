import React from 'react'
import { Box, Image, Flex } from "rebass"
import { Fade } from "react-reveal"

import styles from "./ThreeImageRow.module.css"
import ImageContainer from '../ImageContainer/ImageContainer'


const ThreeImageRow = ({ imageOne, imageTwo, imageThree }) => {
    return(
        <Flex 
            flexWrap="wrap"
            alignContent="center"
            justifyContent="center">
            <Fade>
                <ImageContainer imageSrc={imageOne} className={styles.image}/>
                <ImageContainer imageSrc={imageTwo} className={styles.image}/>
                <ImageContainer imageSrc={imageThree} className={styles.image}/>
            </Fade>
        </Flex>
    )
}

export default ThreeImageRow