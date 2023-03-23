import { Typography, Box, Button, Link } from "@mui/material";
import { StyledContainer, StyledTextField } from "./auth.style";
const SignUp = () => {
  return (
    <StyledContainer maxWidth="1200px">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#ffff",
          alignItems: "center",
          margin: "auto",
          flexDirection: "column",
          width: "50%",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h5" mt={2}>
          Cancoe Coffee
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#279AF1",
          }}
          mt={3}
        >
          Welcome
        </Typography>
        <Box
          component="form"
          sx={{
            padding: "20px",
          }}
        >
          <Typography
            variant="subtitle2"
            ml={1}
            sx={{
              color: " #279AF1",
            }}
          >
            Email
          </Typography>
          <StyledTextField
            size="small"
            id="email"
            placeholder="Email"
            sx={{
              marginBottom: "10px",
            }}
          />
          <br />

          <Typography
            variant="subtitle2"
            ml={1}
            sx={{
              color: " #279AF1",
            }}
          >
            Password
          </Typography>
          <StyledTextField
            size="small"
            id="password"
            placeholder="Password"
            sx={{
              marginBottom: "10px",
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "100%",
              backgroundColor: "#435058",
            }}
          >
            Login
          </Button>
          <br />
          <br />
          <Typography variant="body2">
            Don't have an Account{" "}
            <Link href="/signup" underline="none">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default SignUp;
