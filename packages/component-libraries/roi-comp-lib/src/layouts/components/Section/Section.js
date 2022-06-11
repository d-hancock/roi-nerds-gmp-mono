import React from "react"
import { styled } from "@mui/system"
import PropTypes from "prop-types"
import { Typography } from "@mui/material"
import tw, { css } from "twin.macro"
import { SectionHeader } from "./SectionHeader"

export const SectionContainer = styled("div")({})

// TODO: Need to hookup themeing and reconcile tailwind and mui
export const Section = ({
  titleText,
  highlightedTitleText,
  sectionText,
  children,
}) => {
  return (
    <div>
      <SectionHeader
        titleText={titleText}
        highlightedTitleText={highlightedTitleText}
        sectionText={sectionText}
      />
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
}

Section.PropTypes = {}
