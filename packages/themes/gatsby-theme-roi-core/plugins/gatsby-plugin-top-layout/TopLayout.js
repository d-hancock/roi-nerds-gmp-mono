import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Page from "../../src/components/Page"
import Seo from "../../src/components/Seo"

import "react-lazy-load-image-component/src/effects/blur.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "react-image-lightbox/style.css"
import "aos/dist/aos.css"

export default function TopLayout(props) {
  return (
    <React.Fragment>
      {/* <Seo/> */}
      <Page>{props.children}</Page>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
