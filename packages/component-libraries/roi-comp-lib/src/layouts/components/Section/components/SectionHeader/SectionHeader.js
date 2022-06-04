import React from "react"
import tw from "twin.macro"
import Typography from "@mui/material/Typography"

export const SectionHeader = ({ beginingTitle, highlightTitle }) => {
  return (
    <>
      <Typography variant="h1">
        <span tw="block xl:inline">{beginingTitle}</span>{" "}
        <span tw="block text-indigo-600 xl:inline">{highlightTitle}</span>
      </Typography>
      <h1 tw="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span tw="block xl:inline">{beginingTitle}</span>{" "}
        <span tw="block text-indigo-600 xl:inline">{highlightTitle}</span>
      </h1>
    </>
  )
}

export default SectionHeader
