import React from "react";

import { Box, Container } from "@mui/material";

import MainButton from "../main-button/MainButton";


const SearchNav = () => {
  return (
    <Container
      sx={{
        mt: 23,
        padding: "0 30px 0 30px",
        maxWidth: {
          xs: "400px",
          md: "1200px",
        },
      }}
      disableGutters
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: {
            xs: "flex-start",
            md: "center",
          },
          justifyContent: "space-between",
          backgroundColor: "#fff",
          borderRadius: "12px",
          p: {
            xs: 2,
            md: 1,
          },
          md: {
            xs: 2,
            md: 0,
          },
        }}
      >
        <MainButton iconImg={"navBtnIcon"} />
      </Box>
    </Container>
  );
};

export default SearchNav;
