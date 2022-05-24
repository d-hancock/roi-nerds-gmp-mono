import React from "react"
import tw from "twin.macro"
import { Button } from "@mui/material"
import { Test } from "@roi/roi-comp-lib"

const MuiTestPage = () => {
  return (
    <>
      <Test />
      <Button variant="contained">I'm a test button</Button>
      <div tw="text-4xl text-green-500">Testing Twin</div>
    </>
  )
}

export default MuiTestPage
