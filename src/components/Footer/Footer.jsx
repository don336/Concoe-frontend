import { StyledFooterBar, StyledStack } from "./Footer.styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Stack, Typography } from "@mui/material";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import { COLORS } from "../../Styles/theme";
const Footer = () => {
  return (
    <StyledFooterBar maxWidth="xl">
      <StyledStack direction={{ xs: "column", md: "row" }} spacing={3}>
        <Box>
          <Typography>&copy; 2023 All Rights Reserved</Typography>
        </Box>
        <Box>
          <Typography variant="w1" color={COLORS.YELLOW_GREEN}>
            {" "}
            <SpaOutlinedIcon />
            CONCOE FARM
          </Typography>
        </Box>
        <Box>
          <FacebookIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </Box>
      </StyledStack>
    </StyledFooterBar>
  );
};

export default Footer;
