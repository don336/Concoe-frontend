import React, { useState, useEffect } from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import Navbar from "../../../components/Navbar/Navbar";
import { StyledBox, WeatherBox, StyledTypography } from "./crops.style";
import CustomButton from "../../../elements/customButton/customButton";
import { COLORS } from "../../../Styles/theme";
import CropDataGrid from "./CropDataGrid";
// import pics from "../../../assets/icons/"

const Crops = () => {
  const [block, setBlock] = useState(false);
  const [weather, setWeather] = useState({});
  const [temp, setTemp] = useState({});
  const [district, setDistrict] = useState("");
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=0.6743&lon=31.8363&appid=07dbbfa007a8b431a445f4458efa7938&units=metric";
  const handleDisplay = () => {
    setBlock(true);
  };
  useEffect(() => {
    const getWeather = async () => {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setWeather(data.weather[0]);
        setTemp(data.main);
        setDistrict(data.name);
      } else {
        throw Error(response.statusText);
      }
    };
    getWeather();
  }, []);
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Container>
        <StyledBox>
          <CustomButton
            fontcolor={COLORS.DARK_GREY}
            background={COLORS.YELLOW_GREEN}
            hoverbackground={COLORS.DARK_GREY}
            onClick={handleDisplay}
          >
            Add Crop +
          </CustomButton>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 2, md: 8 }}
            sx={{
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <Grid item xs={1} sm={2} md={2}>
              <Box>
                <CropDataGrid />
              </Box>
            </Grid>
            <Grid item xs={1} sm={2} md={2}>
              <WeatherBox>
                <StyledTypography variant="h4">{district}</StyledTypography>
                <img
                  src={`http://127.0.0.1:5173/src/assets/icons/${weather.icon}.png`}
                  alt=""
                />
                <StyledTypography>
                  Temperature: {Math.round(temp.temp)}°C
                </StyledTypography>
                <StyledTypography>
                  Humidity: {Math.round(temp.humidity)}%
                </StyledTypography>
                <StyledTypography variant="h6">
                  Description: {weather.description}
                </StyledTypography>
              </WeatherBox>
            </Grid>
          </Grid>
        </StyledBox>
      </Container>
    </Container>
  );
};

export default Crops;
