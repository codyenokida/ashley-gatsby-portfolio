import React from "react"

import PageLayout from "../components/PageLayout/PageLayout"
import SEO from "../components/seo"
import SingleImageRow from "../components/SingleImageRow/SingleImageRow"
import TwoImageRow from "../components/TwoImageRow/TwoImageRow"
import ThreeImageRow from "../components/ThreeImageRow/ThreeImageRow"
import BannerImageRow from "../components/BannerImageRow/BannerImageRow"

// Note for Ashley...
//  **** STEP 1 *****
// First you have to import your Picture! Just follow the format
// I started with the images and name them whatever you like
// ** If you want to add new images, go to the images folder under src/images/designs
// And add your images there... once you do that, you can use those images **
import apeelSciencesPost02 from '../images/designs/apeel-sciences-post-02.png'
import apeelSciencesPost03 from '../images/designs/apeel-sciences-post-03.jpg'
import ashleyCharacter from '../images/ashley-character.png'
import dspProWeekFlyer01 from '../images/designs/dsp-proweek-flyer-01.png'
import dspProWeekFlyer02 from '../images/designs/dsp-proweek-flyer-02.png'
import dspProWeekCoverPage from '../images/designs/dsp-proweek-cover.png'
import hrmaLogo from '../images/designs/hrma-logo.png'
import hrmaFlyer01 from '../images/designs/hrma-flyer-01.png'
import hrmaFlyer02 from '../images/designs/hrma-flyer-02.png'
import CCCFlyer01 from '../images/designs/CCC-Open House-Schedule.png'
import CCCFlyer02 from '../images/designs/CCC-Open-House-Flyer.png'
import CCCFlyer03 from '../images/designs/CCC-Open-House-Punch-Cards.png'

//  **** STEP 2 *****
// I created custom tags (<SingleImageRow>, <TwoImageRow>, etc. <- Those things are tags)
// that can be used to create rows of images/animations that are on the website.
// You can add more designs by yourself by creating a tag like I did below! :D
// Ex: 
// *Note* add the thing you added in STEP 1 to insert to imageOne (that's gonna be the first image) 
// *Note2* the tags you add will be ordered from top to bottom when you view it on the website
// <TwoImageRow imageOne={apeelSciencesPost02} TwoImageRow={ashleyCharacter}/>

const description = "Ashley Yeh | I'm currently an undergraduate student studying at the University of California, Irvine majoring in Business Administration with an emphasis in Marketing and a minor in Digital Information Systems. I am passionate designer and is always looking for opportunities to improve!"

const DesignPage = () => (
  <PageLayout title="designs">
    <SEO title="Designs" description={description}/>

    <BannerImageRow bannerImage={apeelSciencesPost03}/>
    <TwoImageRow imageOne={apeelSciencesPost02} imageTwo={ashleyCharacter}/>
    <TwoImageRow imageOne={dspProWeekFlyer01} imageTwo={dspProWeekFlyer02}/>
    <BannerImageRow bannerImage={dspProWeekCoverPage}/>
    <ThreeImageRow imageOne={hrmaLogo} imageTwo={hrmaFlyer01} imageThree={hrmaFlyer02}/>
    <ThreeImageRow imageOne={CCCFlyer01} imageTwo={CCCFlyer02} imageThree={CCCFlyer03}/>

  </PageLayout>
)

export default DesignPage
