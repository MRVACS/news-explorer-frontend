import { useContext } from "react";
import { useForm } from "react-hook-form";
import SignupForm from "../SignupForm/SignupForm";
import "./LoginForm.css";
import { AppContext } from "../../../contexts/AppContext.js";

export default function LoginForm() {
  const { handleOpenPopup } = useContext(AppContext);
  const {
    register,
    formState: { errors },
  } = useForm();
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
          <label className="form__input-title" htmlFor="email">
            Correo electrónico
          </label>
          <input
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
            className="form__input"
            placeholder="Introduce tu correo electrónico"
            type="email"
            id="email"
            name="email"
          />
          {errors.email?.type === "required" && (
            <span role="alert" className="form__input-error"></span>
          )}
        </div>
        <div className="form__input-section">
          <label className="form__input-title" htmlFor="password">
            Contraseña
          </label>
          <input
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
            className="form__input"
            placeholder="Introduce tu contraseña"
            type="password"
            id="password"
            name="password"
          />
          {errors.password?.type === "required" && (
            <span role="alert" className="form__input-error"></span>
          )}
        </div>
        <button type="submit" className="form__submit-button">
          Iniciar Sesión
        </button>
        <div className="form__switch">
          {/*  <p className="form__switch-text">o</p> */}
          <button
            type="button"
            className="form__switch-link"
            onClick={() => handleOpenPopup(signupPopup)}
          >
            o inscribirse
          </button>
        </div>
      </form>
    </div>
  );
}
