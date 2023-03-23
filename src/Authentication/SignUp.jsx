import { Typography, Box, Button, Link } from "@mui/material";
import {
  StyledContainer,
  StyledStack,
  StyledBox,
  StyledTextField,
} from "./SignUp.style";
const SignUp = () => {
  return (
    <StyledContainer maxWidth="1200px">
      <StyledStack direction="row" spacing={2}>
        <StyledBox>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              padding: "10px",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: " #AC9969",
              }}
            >
              Concoe | Coffee & Grain
            </Typography>
            <br />
            <Typography variant="body2">
              Our registration proces is quick and easy, taking no more than 10
              minutes to complete
            </Typography>
          </Box>
        </StyledBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginTop: "10px",
            }}
          >
            Get Started
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#aaa",
            }}
          >
            Create your acount now
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
                color: " #AC9969",
                marginTop: "10px",
              }}
            >
              First name
            </Typography>
            <StyledTextField
              size="small"
              id="fname"
              placeholder="First Name"
              sx={{
                marginBottom: "10px",
              }}
            />
            <br />
            <Typography
              variant="subtitle2"
              ml={1}
              sx={{
                color: " #AC9969",
              }}
            >
              Last name
            </Typography>
            <StyledTextField
              size="small"
              id="lname"
              placeholder="Last Name"
              sx={{
                marginBottom: "10px",
              }}
            />
            <br />

            <Typography
              variant="subtitle2"
              ml={1}
              sx={{
                color: " #AC9969",
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
                color: " #AC9969",
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
              Sign Up
            </Button>
            <br />
            <br />
            <Typography variant="body2">
              Have an acount{" "}
              <Link href="/Login" underline="none">
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </StyledStack>
    </StyledContainer>
  );
};

export default SignUp;
