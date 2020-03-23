import React from "react"

import PageLayout from "../components/PageLayout/PageLayout"
import SEO from "../components/seo"
import TwoImageRow from "../components/TwoImageRow/TwoImageRow"
import ThreeImageRow from "../components/ThreeImageRow/ThreeImageRow"
import BannerImageRow from "../components/BannerImageRow/BannerImageRow"

import HrmaOne from '../images/designs/hrma 6.png'
import Cover from "../images/designs/cover photo-01.png"

const DesignPage = () => (
  <PageLayout title="designs">
    <SEO title="Designs" />
    <TwoImageRow imageOne={HrmaOne} imageTwo={HrmaOne}/>
    <ThreeImageRow imageOne={HrmaOne} imageTwo={HrmaOne} imageThree={HrmaOne}/>
    <BannerImageRow bannerImage={Cover}/>
  </PageLayout>
)

export default DesignPage
