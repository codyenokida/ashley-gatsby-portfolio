import React from "react"

import PageLayout from "../components/PageLayout/PageLayout"
import SEO from "../components/seo"
import SingleImageRow from "../components/SingleImageRow/SingleImageRow"
import TwoImageRow from "../components/TwoImageRow/TwoImageRow"
import ThreeImageRow from "../components/ThreeImageRow/ThreeImageRow"
import BannerImageRow from "../components/BannerImageRow/BannerImageRow"

// Note for Ashley...
//  **** STEP 1 *****
// First you have to import your Animations! Just follow the format
// I started with the animation and name them whatever you like
import apeelSciencesPost01 from '../images/animations/apeel-sciences-post-01.gif'
import playAnimation from '../images/animations/click-play.gif'
import ploppingFish from '../images/animations/plopping-fish.gif'
import smokeMountain from '../images/animations/smoke-mountains.gif'


//  **** STEP 2 *****
// I created custom tags (<SingleImageRow>, <TwoImageRow>, etc. <- Those things are tags)
// that can be used to create rows of images/animations that are on the website.
// You can add more animations by yourself by creating a tag like I did below! :D
// Ex: 
// *Note* add the thing you added in STEP 1 to insert to imageOne (that's gonna be the first image) 
// <TwoImageRow imageOne={apeelSciencesPost02} TwoImageRow={ashleyCharacter}/>

const AnimationPage = () => (
  <PageLayout title="animations">
    <SEO title="Animations" />
    <TwoImageRow imageOne={apeelSciencesPost01} imageTwo={playAnimation}/>
    <TwoImageRow imageOne={ploppingFish} imageTwo={smokeMountain}/>
  </PageLayout>
)

export default AnimationPage
