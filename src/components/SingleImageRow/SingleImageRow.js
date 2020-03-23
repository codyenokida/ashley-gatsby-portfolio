import React from 'react'
import { Image, Flex } from "rebass"
import { Fade } from "react-reveal"

import styles from "./SingleImageRow.module.css"
import ImageModal from '../ImageModal/ImageModal'
import HoverShadowBox from '../HoverShadowBox/HoverShadowBox'

class SingleImageRow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalState: false,
            modalImage: null
        };
    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(imageName, e) {
        this.setState(state => ({
            modalState: !state.modalState,
            modalImage: imageName
        }));
    }

    render() {
        return(
            <Flex 
                flexWrap="wrap"
                alignContent="center"
                justifyContent="center">
                <Fade>
                    <HoverShadowBox>
                        <Image src={this.props.imageOne} className={styles.image} onClick={this.handleClick.bind(this, this.props.imageOne)}/>
                    </HoverShadowBox>
                </Fade>
                {this.state.modalState ? <ImageModal action={this.handleClick} source={this.state.modalImage}/> : null}
            </Flex>
        )
    }
}


export default SingleImageRow