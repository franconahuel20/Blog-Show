import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { Container } from "react-bootstrap";
import {Route, Routes, BrowserRouter} from "react-router-dom";

const Main = ( auth,
  login,
  logout,
  validate,
  setAuth) => {
  return (
    <>
      <Container
        fluid
        className="px-0 d-flex flex-column min-vh-100"
        style={{ backgroundColor: "#000000" }}
      >
        <Header 
        auth={auth}
        />
        <BrowserRouter>
        <Routes>
        <Route
          element={
            <Login auth={auth} login={login} setAuth={setAuth} validate={validate} />
          }
          path="/login"
        />
         </Routes>
         </BrowserRouter>
        <Landing />
        <Carousel />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
