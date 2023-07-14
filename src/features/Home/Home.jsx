import Navbar from "../../layouts/Navbar/Navbar";
import Content from "../../layouts/Content/Content";
import { StyledContainer } from "./Home.styles";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <StyledContainer maxWidth="xl">
      <Navbar />
      <Content />
      <Footer />
    </StyledContainer>
  );
};

export default Home;
