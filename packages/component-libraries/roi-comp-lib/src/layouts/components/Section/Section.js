import React from "react"
import { styled } from "@mui/system"
import PropTypes from "prop-types"
import { Typography } from "@mui/material"
import tw from "twin.macro"

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
      <div tw="text-center">
        <Typography
          variant="h1"
          component="h1"
          tw="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
        >
          <span tw="block xl:inline">{titleText}</span>{" "}
          <span tw="block text-indigo-600 xl:inline">
            {highlightedTitleText}
          </span>
        </Typography>
        <Typography
          tw="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          variant="subtitle1"
        >
          {sectionText}
        </Typography>
      </div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
}

Section.PropTypes = {}
