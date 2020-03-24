import React from "react"

import AshleyImage from "../images/ashley-portrait.png"

import PageLayout from "../components/PageLayout/PageLayout"
import SEO from "../components/seo"

import styles from './about.module.css'
import ResumeButton from "../components/ResumeButtom/ResumeButton"

import ResumeLink from '../resume/Ashley Yeh Resume - Feb. 2020 .pdf'

const description = "Ashley Yeh | I'm currently an undergraduate student studying at the University of California, Irvine majoring in Business Administration with an emphasis in Marketing and a minor in Digital Information Systems. I am passionate designer and is always looking for opportunities to improve!"

const AboutPage = () => (
  <PageLayout title="about">
    <SEO title="About" description={description} />
    <div className={styles.indexContainer}>
      <div className={styles.indexText}>
        <h2>HEY THANKS FOR STOPPING BY!</h2>
        <p>
          My name is Ashley and I am an undergraduate student at University of California, Irvine majoring in Business Administration with an emphasis in Marketing and a minor in Digital Information Systems.
          <br/>
          <br/>
          I'd love to chat! Say hello at ashleywyeh@gmail.com :)
        </p>

        <ResumeButton resumeLink={ResumeLink}/>
      </div>

      <img src={AshleyImage} className={styles.image}/>

    </div>
  </PageLayout>
)

export default AboutPage
