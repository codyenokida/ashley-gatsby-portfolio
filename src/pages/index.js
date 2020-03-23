import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import AshleyCharacter from "../images/ashley-character.png"

import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.indexContainer}>

      <img src={AshleyCharacter} className={styles.image}/>

      <div className={styles.indexText}>
        <h1 id="hello">HELLO HELLO! <br/> I'M <span>ASHLEY</span></h1>
        <p>
          I am proud to say that I am a <b>work-in-progress! </b>
          Currently, a self-taught graphic designer and animator who is eager to seek out new ways to
          <b> learn</b> and <b>grow</b>.
        </p>
      </div>

    </div>
  </Layout>
)

export default IndexPage
