import React from "react"
import { Image } from "rebass"
import HoverShadowBox from "../HoverShadowBox/HoverShadowBox"
import ImageModal from "../ImageModal/ImageModal"

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalState: true,
        };
    
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        this.setState(state => ({
            modalState: !state.modalState,
        }));
    }

    render() {
        return(
            <HoverShadowBox raise className="styles.containershadow" >
                {this.state.modalState ? null : <ImageModal action={this.handleClick} source={this.props.imageSrc}/>}
                <Image src={this.props.imageSrc} className={this.props.className} onClick={this.handleClick}/>
            </HoverShadowBox>
        )
    }
}

export default ImageContainer