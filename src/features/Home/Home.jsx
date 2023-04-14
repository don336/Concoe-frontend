import Navbar from "../../components/Navbar/Navbar";
import Content from "../../components/Content/Content";
import { StyledContainer } from "./Home.styles";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <StyledContainer maxWidth="xl">
      <Navbar />
      <Content />
      <Footer/>
    </StyledContainer>
  );
};

export default Home;
