import React from 'react'
import { Box, Image, Flex } from "rebass"
import { Fade } from "react-reveal"

import styles from "./TwoImageRow.module.css"
import ImageContainer from '../ImageContainer/ImageContainer'


const TwoImageRow = ({ imageOne, imageTwo }) => {
    return(
        <Flex 
            flexWrap="wrap"
            alignContent="center"
            justifyContent="center">
            <Fade>
                <ImageContainer imageSrc={imageOne} className={styles.image}/>
                <ImageContainer imageSrc={imageTwo} className={styles.image}/>
            </Fade>
        </Flex>
    )
}

export default TwoImageRow