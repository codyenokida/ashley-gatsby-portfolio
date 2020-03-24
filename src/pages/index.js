import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import AshleyCharacter from "../images/ashley-character.png"
import { Image } from "rebass"

import styles from "./index.module.css"

const description = "Ashley Yeh | I'm currently an undergraduate student studying at the University of California, Irvine majoring in Business Administration with an emphasis in Marketing and a minor in Digital Information Systems. I am passionate designer and is always looking for opportunities to improve!"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description={description}/>
    <div className={styles.indexContainer}>

      <Image src={AshleyCharacter} className={styles.image}/>

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
