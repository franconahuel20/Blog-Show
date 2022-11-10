/* import Header from "../components/Header"; */
import ArticlesGrid from "../components/ArticlesGrid";
import Footer from "../components/Footer";
import StickyNav from "../components/StickyNav";
import LogInCopy from "../components/LogInCopy";
import RegisterCopy from "../components/RegisterCopy";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <Container fluid className="px-0 d-flex flex-column min-vh-100">
        <StickyNav />
        <Container className="d-flex justify-content-end">
          <LogInCopy />
          <RegisterCopy />
        </Container>
        {/* <Header  auth={auth}  /> */}
        <ArticlesGrid />
        <Footer />
      </Container>
    </>
  );
};
export default Main;
