import Navbar from "../../layouts/Navbar/Navbar";
import Content from "../../layouts/Content/Content";
import { StyledContainer } from "./Home.styles";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Home = () => {
  const [isCustomer, setIsCustomer] = useState(true);
  const [loading, setLoading] = useState(true);
  const userEmail = useSelector(state => state.auth.currentUser.email);
  const Customers = useSelector(state => state.customer.customers);
  useEffect(() => {
    if (Customers.length) {
      Customers.map(customer => {
        if (customer.email === userEmail) {
          setIsCustomer(true);
          localStorage.setItem("customerId", customer.customerId);
          return customer;
        }
      });
    }
    setLoading(false);
  }, [Customers]);


  return (
    <StyledContainer maxWidth="xl">
      <Navbar />
      <Content isCustomer={isCustomer} loading={loading}/>
      <Footer />
    </StyledContainer>
  );
};

export default Home;
