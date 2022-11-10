import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import LogInForm from "./LogInForm";

const LogInCopy = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link className="f-yellow" onClick={() => setShow(true)}>
        Iniciar Sesión
      </Link>
      <div className="f-yellow mx-1"> | </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <img
            alt="logo"
            src="/img/logo.png"
            height="20px"
            className="d-block m-0 p-0"
          />
        </Modal.Header>
        <div className="b-grey">
          <Modal.Body>
            <LogInForm />
          </Modal.Body>
          {/* DENTRO DEL BODY CREAR COMPONNENTE CON EL FORMULARIO DE LOGIN */}
          <p>NO estás registrado aún? haz click aquí</p>
          <p>Olvidaste contraseña?</p>
        </div>
      </Modal>
    </>
  );
};

export default LogInCopy;
