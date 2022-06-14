import React from "react"
import tw, { css } from "twin.macro"
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
  useTheme,
} from "@mui/material"

const ServiceCard = ({ title, subtitle }) => {
  const theme = useTheme()
  return (
    <Box
      // display={"block"}
      width={1}
      height={1}
      sx={{
        textDecoration: "none",
        transition: "all .2s ease-in-out",
        "&:hover": {
          transform: `translateY(-${theme.spacing(1 / 2)})`,
        },
      }}
    >
      <Box
        component={Card}
        width={1}
        height={1}
        display={"flex"}
        flexDirection={"column"}
      >
        <CardContent>
          <Typography
            variant={"h6"}
            gutterBottom
            sx={{ fontWeight: 500 }}
          >
            {title}
          </Typography>
          <Typography color="text.secondary">{subtitle}</Typography>
        </CardContent>
        <Box flexGrow={1} />
        <CardActions sx={{ justifyContent: "flex-end", paddingX: 4 }}>
          <Button size="large">Learn More</Button>
        </CardActions>
      </Box>
    </Box>
  )
}

export default ServiceCard
