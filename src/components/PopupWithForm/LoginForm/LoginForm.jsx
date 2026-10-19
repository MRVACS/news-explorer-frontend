import { useContext } from "react";
import SignupForm from "../SignupForm/SignupForm";
import "./LoginForm.css";
import { TheContext } from "../../../contexts/TheContext.js";

export default function LoginForm() {
  const { handleOpenPopup } = useContext(TheContext);
  const signupPopup = { title: "Inscribirse", children: <SignupForm /> };
  const handleSubmit = (e) => {
    e.preventDefault();
    /* handleLogin(data); */
  };
  return (
    <div className="login">
      <form className="login__form form" onSubmit={handleSubmit}>
        {/*  <h2 className="form__title">Iniciar Sesión</h2> */}
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
        <button type="submit" className="form__submit-button">
          Iniciar Sesión
        </button>
        <div className="form__switch">
          {/*  <p className="form__switch-text">o</p> */}
          <p
            className="form__switch-link"
            onClick={() => handleOpenPopup(signupPopup)}
          >
            o inscribirse
          </p>
        </div>
      </form>
    </div>
  );
}
