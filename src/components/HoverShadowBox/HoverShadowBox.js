import React from "react"
import { Box } from "rebass"
import styles from "./HoverShadowBox.module.css"

class HoverShadowBox extends React.Component {
  render() {
    return (
      <Box
        className={
          this.props.raise
            ? styles.hover_shadow_box_raise
            : styles.hover_shadow_box
        }
        sx={{
          margin: 10,
          padding: [0, 5, 10, 10],
        }}
      >
        {this.props.children}
      </Box>
    )
  }
}

export default HoverShadowBox
