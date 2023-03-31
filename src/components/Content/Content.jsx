import {
  Grid,
  Box,
  Stack,
  Typography,
  ImageList,
  ImageListItem,
  useTheme,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  StyledContainer,
  StyledBox,
  StyledButton,
  SecondButton,
} from "./content.style";
import { COLORS } from "../../Styles/theme";
import CustomButton from "../../elements/customButton/customButton";
const Content = () => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, md: 4 }}
      >
        <Grid
          item
          xs={1}
          sm={2}
          md={2}
          sx={{
            marginBottom: "30px",
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: `${COLORS.WHITE}`,
              }}
            >
              Fresh, Sustainable, Coffee and Corn Grown in{" "}
              <span className="primary-color">Bukuya Uganda.</span>
            </Typography>
          </Box>
          <StyledBox>
            <Typography variant="w1">
              Our farming startup brings sustainable, locally grown produce to
              Uganda and the whole of east africa. With innovative technology,
              we're revolutionizing the way we grow and consume fresh coffee &
              food. Apart from plant Growing, Concoe takes part in Live Stock
              Farming and has a variety of Breeds both exotic and Local.
            </Typography>
          </StyledBox>
          <Box>
            <CustomButton
              fontcolor={COLORS.DARK_GREY}
              background={COLORS.LIGHT_GREEN}
              borderRadius={"1.125rem"}
              endIcon={<ArrowOutwardIcon />}
              padding={theme.spacing(1, 3)}
              hoverbackground={COLORS.DARK_GREY}
              hovercolor={COLORS.LIGHT_GREEN}
            >
              <Typography variant="w2"> Start Now</Typography>
            </CustomButton>
            <SecondButton>How it Works</SecondButton>
          </Box>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1607681034540-2c46cc71896d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1628236876894-dbde8ff5a944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1634467524884-897d0af5e104?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1554402100-8d1d9f3dff80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1559631526-5716df3cfacd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1629008642899-178df6fc5f2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1576266448917-992547cdaa2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1633281122614-49d2304d57a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1598303080484-8db04d10c787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1551810080-3eb3be72d3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Bike",
  },
];
export default Content;
