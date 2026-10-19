import { useContext, useState } from "react";
import { TheContext } from "../../../contexts/TheContext.js";
import LoginForm from "../LoginForm/LoginForm";
import "./SignupForm.css";

export default function SignupForm() {
  const { handleOpenPopup } = useContext(TheContext);

  const loginPopup = { title: "Iniciar Sesión", children: <LoginForm /> };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* handleSignup(data); */
  };

  return (
    <div className="signup">
      <form className="signup__form form" onSubmit={handleSubmit}>
        {/* <h2 className="form__title">Inscribirse</h2> */}
        <div className="form__input-section">
          <h3 className="form__input-title">Correo electrónico</h3>
          <input
            className="form__input"
            placeholder="Introduce tu correo electrónico"
            type="email"
            id="email"
            name="email"
            required
          />
          <span className="form__input-error"></span>
        </div>
        <div className="form__input-section">
          <h3 className="form__input-title">Contraseña</h3>
          <input
            className="form__input"
            placeholder="Introduce tu contraseña"
            type="password"
            id="password"
            name="password"
            required
          />
          <span className="form__input-error"></span>
        </div>
        <div className="form__input-section">
          <h3 className="form__input-title">Nombre de usuario</h3>
          <input
            className="form__input"
            placeholder="Introduce tu nombre de usuario"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <button type="submit" className="form__submit-button">
          Inscribirse
        </button>
        <div className="form__switch">
          {/* <p>o</p> */}
          <p
            className="form__switch-link"
            onClick={() => handleOpenPopup(loginPopup)}
          >
            o iniciar sesión
          </p>
        </div>
      </form>
    </div>
  );
}
