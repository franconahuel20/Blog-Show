import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Forgot_Password from "../components/Forgot_Password";
import Register from "../components/Register";
import { Container } from "react-bootstrap";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Main = ({ auth, login, logout, validate, setAuth }) => {
  return (
    <Container fluid className="px-0 d-flex flex-column min-vh-100">
    <Header />
    <Routes>
      <Route element={<Login />} path="/Login"></Route>
      <Route element={<Register />} path="/Register"></Route>
      <Route element={<Forgot_Password />} path="/Forgot_Password"></Route>
    </Routes>
    <Footer />
  </Container>
  );
};

export default Main;