import Navbar from "../../components/Navbar/Navbar";
import Content from "../../components/Content/Content";
import { StyledContainer } from "./Home.styles";

const Home = () => {
  return (
    <StyledContainer maxWidth='xl'>
      <Navbar />
      <Content/>
    </StyledContainer>
  );
};

export default Home;
