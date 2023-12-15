import React from "react";
import { Container, Typography } from "@mui/material";
import Navbar from "../../layouts/Navbar/Navbar.jsx";

const About = () => {
  return (
    <Container maxWidth={"xl"}>
      <Navbar />
      <Typography sx={{ color: "white" }}>About Us</Typography>
    </Container>
  );
};

export default About;
