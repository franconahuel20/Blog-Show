import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../views/Main";

import ErrorPage from "../components/ErrorPage";
import Articles from "../components/Articles";

/* import { auth, login, setAuth, validate } from "../components/Login";
import Login from "../components/Login"; */

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
        ¿<Route path="/article/:id" element={<Articles />} />¿
        {/*         <Route
          element={
            <Login
              auth={auth}
              login={login}
              setAuth={setAuth}
              validate={validate}
            />
          }
          path="/login"
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
