import React from "react"
import { styled } from "@mui/system"
import PropTypes from "prop-types"
import { Typography } from "@mui/material"
import tw, { css } from "twin.macro"

export const SectionHeader = ({
  titleText,
  highlightedTitleText,
  sectionText,
}) => {
  return (
    <div tw="lg:text-center">
      <Typography
        // variant="h1"
        component="h1"
        css={[
          tw`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl`,
        ]}
      >
        <span tw="block xl:inline">{titleText}</span>{" "}
        {highlightedTitleText && (
          <span tw="block text-indigo-600 xl:inline">
            {highlightedTitleText}
          </span>
        )}
      </Typography>
      {sectionText && (
        <Typography
          css={[
            tw`mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`,
          ]}
          component="p"
          // variant="subtitle1"
        >
          {sectionText}
        </Typography>
      )}
    </div>
  )
}

SectionHeader.PropTypes = {}

export default SectionHeader
