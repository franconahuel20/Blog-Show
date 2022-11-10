import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from "react-router-dom";
import ModalDialog from 'react-bootstrap/ModalDialog';
import Footer from './Footer';
import validator from 'validator';




const Forgot_Password = () => {
    const [show, setShow] = useState(true);
    const [mail, setMail] = useState("");
    const [firstMail, setFirstMail] = useState(true);
    const validateMail = (n) => {
      return (
        validator.matches(n, "^[a-zA-Z ]*$") && validator.isLength(n, {min: 5, max: 36}) && validator.isEmail(n, {allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, domain_specific_validation: false, blacklisted_chars: '', host_blacklist: []})
      );
    };

  return (<>
    <div className='FondoPass d-none d-xl-block mx-auto'>
        <img className='w-100' src='/img/cine.jpg' /></div>
    <Modal show={show} contentClassName="bg-black ModalPass">
        <Modal.Header className="border-danger bg-black">
          <Link className="mx-auto" to="/"><img className="bg-dark logo" src="/img/logo.png"width="100"height="100"/></Link>
        </Modal.Header>
        <h4 className="mx-auto mt-5">¿No puedes recordar tu contraseña?</h4>
        <h5 className="mx-auto pt-2">¡No hay problema!</h5>
        <Modal.Body className="mb-3 py-4 px-4 bg-black">
        <Form>
      <Form.Group className="my-2" controlId="formBasicPassword">
        <h6 className='text-center pb-5'>Ingresa tu Email</h6>
        <Form.Label>Email{" "}
            {!validateMail(mail) && !firstMail && (
              <span className="text-danger">Debe completar este campo con su Email</span>)}</Form.Label>
        <Form.Control value={mail} onInput={(e) => setMail(e.target.value)} onBlur={()=> setFirstMail(false)}  className="p-3" type="email" placeholder="name@domain.com" />
      </Form.Group>
     
      
    </Form>
        </Modal.Body>
        <Button className="mx-auto px-5 my-5" size="lg"  type="submit" variant="outline-dark" onClick={()=>console.log("Your password")}>
            <h4 className="m-auto py-2 px-4">Recupera tu Contraseña</h4>
          </Button>
      </Modal>
      </>
  )
}

export default Forgot_Password;