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


const DesignPage = () => (
  <PageLayout title="designs">
    <SEO title="Designs" />
    <BannerImageRow bannerImage={apeelSciencesPost03}/>
    <TwoImageRow imageOne={apeelSciencesPost02} imageTwo={ashleyCharacter}/>
    <TwoImageRow imageOne={dspProWeekFlyer01} imageTwo={dspProWeekFlyer02}/>
    <BannerImageRow bannerImage={dspProWeekCoverPage}/>
    <ThreeImageRow imageOne={hrmaLogo} imageTwo={hrmaFlyer01} imageThree={hrmaFlyer02}/>
    <ThreeImageRow imageOne={CCCFlyer01} imageTwo={CCCFlyer02} imageThree={CCCFlyer03}/>

  </PageLayout>
)

export default DesignPage
