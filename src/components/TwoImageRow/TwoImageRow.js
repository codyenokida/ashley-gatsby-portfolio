import React from 'react'
import { Box, Image, Flex } from "rebass"
import { Fade } from "react-reveal"

import styles from "./TwoImageRow.module.css"
import ImageModal from '../ImageModal/ImageModal';

class TwoImageRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalState: true
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        // e.preventDefault();
        this.setState(state => ({
            modalState: !state.modalState
        }));
    }

    render() {
        return(
            <Flex 
                flexWrap="wrap"
                alignContent="center"
                justifyContent="center">
                <Fade>
                    <Image src={this.props.imageOne} className={styles.image} onClick={this.handleClick}></Image>
                    <Image src={this.props.imageTwo} className={styles.image} onClick={this.handleClick}></Image>
                </Fade>
        
                {this.state.modalState ? null : <ImageModal action={this.handleClick} source={this.props.imageOne}/>}
            </Flex>
        )
    }

}

export default TwoImageRow