import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
    return (
      <>
        
    );
  };
  
  export default Login;

  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
    <script
      src="https://kit.fontawesome.com/c1d133cc0a.js"
      crossorigin="anonymous"
    ></script>
    <link
      rel="stylesheet"
      href="./styles/login.css"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="./AssetData/Sweet/sweetalert2.css">
    <script src="./AssetData/Sweet/sweetalert2.min.js" defer></script>

    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <main>
      <div class="conteiner_principal">
        <div class="container-form sign-up">
          <div class="welcome-back">
              <div class="message">
                  <h2>Bienvenido a Blog Show</h2>
                  <button class="sign-up-btn">Iniciar Sesion</button>
              </div>
          </div>
        
          <form class="formulario">
              <h2 class="create-account">Crear una cuenta</h2>
              <input id="nombre_registro" type="text" placeholder="Nombre" required autofocus maxlength="50">
              <input id="telefono_registro" type="phone" placeholder="Teléfono" required autofocus maxlength="12">
              <input id="email_registro" type="email" placeholder="Email" required autofocus maxlength="50">
              <input id="password_registro" type="password" placeholder="Contraseña" required autofocus maxlength="40">
              <input id="boton_registro" type="button" value="Registrarse">
          </form>
        </div>
      <div class="container-form sign-in">
        <div class="welcome-back">
          <div class="message">
              <h2>Bienvenido de nuevo</h2>
              <p>Si aún no tienes una cuenta por favor registrese aqui</p>
              <button class="sign-in-btn">Registrarse</button>
          </div>
        </div>
        <form class="formulario">
            <h2 class="create-account">Iniciar Sesión</h2>
            <input id="email_login" type="email" placeholder="Email" required autofocus maxlength="50">
            <input id="password_login" type="password" placeholder="Contraseña" required autofocus maxlength="40">
            <input id="boton_login" type="button" value="Iniciar Sesión">
            <a href="./recuperar_clave.html">
                <input type="button" class="btn btn-danger" value="Recuperar Contraseña">
              </a>
        </form>
      </div>
    </div>


    </main>
    <footer
      class="footer_juegos conteiner m-0 align-items-center text-center row"
    >
      <aside class="publicidad_footer order-3 order-md-1 col m-5">
        <a href="https://rollingcodeschool.com/" target="_blank"
          ><img
            src="https://rollingcodeschool.com/wp-content/uploads/2021/07/Grupo-8.png"
            alt="rollingcode"
        /></a>
      </aside>
      <div class="footer_derechos order-1 order-md-2 col m-5">
        <p>Todos los derechos reservados</p>
        <p>Rolling Games ©</p>
      </div>
      <div class="footer_redes order-2 order-md-3 col m-1 justify-content-center">
        <a href="./error_recuperar_clave.html"><i class="fa-brands fa-instagram icon-footer icon d-flex align-items-center justify-content-center p-4"></i></a>
        <a href="./error_recuperar_clave.html"><i class="fa-brands fa-facebook icon-footer icon d-flex align-items-center justify-content-center p-4"></i></a>
        <a href="./error_recuperar_clave.html"><i class="fa-brands fa-whatsapp icon  d-flex align-items-center justify-content-center p-4"></i></a>
        <a href="./error_recuperar_clave.html"><i class="fa-brands fa-twitter icon d-flex align-items-center p-4 justify-content-center"></i></a>
      </div>
    </footer>

    <!-- JavaScript Bundle with Popper -->
    <script src = "./script/login.js"></script>
    <script src = "./script/registro.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

