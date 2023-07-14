import { Grid, Box, Card, Typography, CardMedia, useTheme, CardActions, CardContent, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  StyledContainer,
  StyledBox,
  SecondButton,
  MissionBox,
  StyledTypography,
  MissionTypography,
  TeamBox,
  TeamTypography,
  CustomLink
} from "./content.style.jsx";
import CustomButton from "../../elements/CustomButton/customButton.jsx";
import Images from "../../components/ImageList/Images.jsx";
import { COLORS } from "../../styles/theme.jsx";
import { useSelector } from "react-redux";

const Content = () => {
  const theme = useTheme();
  const authState = useSelector(state => state.auth);

  const { isAuthenticated } = authState;
  return (
    <StyledContainer>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, md: 4 }}
        sx={{
          justifyContent: "space-between"
        }}
      >
        <Grid
          item
          xs={1}
          sm={2}
          md={2}
          sx={{
            marginBottom: "30px"
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: `${COLORS.WHITE}`
              }}
            >
              Fresh, Sustainable, Coffee and Corn Grown in <span className="primary-color">Bukuya Uganda.</span>
            </Typography>
          </Box>
          <StyledBox>
            <Typography variant="w1">
              Our farming startup brings sustainable, locally grown produce to Uganda and the whole of east africa. With
              innovative technology, we're revolutionizing the way we grow and consume fresh coffee & food. Apart from
              plant Growing, Concoe takes part in Live Stock Farming and has a variety of Breeds both exotic and Local.
            </Typography>
          </StyledBox>
          <Box>
            {isAuthenticated ? (
              ""
            ) : (
              <CustomLink to="/signup">
                <CustomButton
                  fontcolor={COLORS.DARK_GREY}
                  background={COLORS.LIGHT_GREEN}
                  borderRadius={"1.125rem"}
                  endIcon={<ArrowOutwardIcon />}
                  padding={theme.spacing(1, 3)}
                  hoverbackground={COLORS.DARK_GREY}
                  hovercolor={COLORS.LIGHT_GREEN}
                >
                  {" "}
                  <Typography variant="w2">Start Now</Typography>
                </CustomButton>
              </CustomLink>
            )}
            <CustomLink to="/About">
              <SecondButton>How it Works</SecondButton>
            </CustomLink>
          </Box>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <Images />
        </Grid>
      </Grid>
      <MissionBox direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Box>
          <StyledTypography variant="h3">
            Vision <span className="primary-color">Statement</span>
          </StyledTypography>
          <MissionTypography variant="body2">
            Our coffee farm strives to be a sustainable and innovative leader in the industry, providing exceptional
            quality coffee beans while prioritizing the well-being of our environment, community, and employees.
          </MissionTypography>
          <MissionTypography variant="body2">
            {" "}
            We envision a future where every cup of our coffee tells the story of our commitment to responsible farming
            practices, social responsibility, and the art of producing a truly exceptional cup of coffee.
          </MissionTypography>
        </Box>
        <Box>
          <StyledTypography variant="h3">
            Mission <span className="primary-color">Statement</span>{" "}
          </StyledTypography>
          <MissionTypography variant="body2">
            Our mission is to produce the finest quality coffee beans while maintaining the highest standards of
            environmental stewardship, social responsibility, and ethical business practices.
          </MissionTypography>{" "}
          <MissionTypography variant="body2">
            Through sustainable farming methods, community engagement, and investment in our employees, we are dedicated
            to delivering exceptional coffee to our customers, while leaving a positive impact on the world around us.
          </MissionTypography>
        </Box>
      </MissionBox>
      <TeamBox>
        <Box>
          <TeamTypography variant="h3">Our Team.</TeamTypography>
        </Box>
        <Box
          sx={{
            marginLeft: "1rem",
            marginTop: "1rem",

            padding: "1rem"
          }}
        >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 9 }}>
            <Grid item xs={2} sm={2} md={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  title="Team member"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lisa Druxler
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={1} sm={2} md={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80"
                  title="team member"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Crage Druxla
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              xs={1}
              sm={2}
              md={3}
              sx={{
                marginBottom: "30px"
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                  title="Team member"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Loraine Britney
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TeamBox>
    </StyledContainer>
  );
};

export default Content;
