import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <Container fluid className="px-0 d-flex flex-column min-vh-100">
        <Header />
        <Carousel />
        <Landing />        
        <Footer />
      </Container>
    </>
  );
};

export default Main;
