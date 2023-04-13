import { StyledFooterBar, StyledStack } from "./Footer.styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Stack, Typography } from "@mui/material";
const Footer = () => {
  return (
    <StyledFooterBar maxWidth="xl">
      <StyledStack direction={{ xs: "column", md: "row" }} spacing={3}>
        <Box>
          <Typography>&copy; 2023 All Rigts Reserved</Typography>
        </Box>
        <Box>
          <span className="primary-color">CONCOE FARM</span>
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
