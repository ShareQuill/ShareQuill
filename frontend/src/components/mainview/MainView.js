import React from "react";

import { Box, Container, Typography } from "@mui/material";

import Navbar from "../navbar/Navbar";
import MainButton from "../main-button/MainButton";
import SearchNav from "../search-nav/SearchNav";
import { HeroStyle } from "./MainViewStyle";

const Hero = () => {
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={HeroStyle['container']}
    >
      <Box
        sx={HeroStyle['box']}
      >
        <Navbar />
        <Typography
          sx={HeroStyle['typography']}
        >
          Discover the most engaging places
        </Typography>
        <MainButton text="Discover on 3D Globe" iconImg={"btnGlobalIcon"} />
        <SearchNav />
      </Box>
    </Container>
  );
};

export default Hero;
