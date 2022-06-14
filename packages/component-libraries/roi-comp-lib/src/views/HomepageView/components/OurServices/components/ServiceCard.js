import React from "react"
import tw, { css } from "twin.macro"
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material"

const ServiceCard = () => {
  return (
    <Card>
      <CardContent>
        <h3 tw="text-g">I am the Header</h3>
        <Typography>I'm a quick blerb about the type of service</Typography>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
