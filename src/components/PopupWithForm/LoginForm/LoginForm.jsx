import { useContext, useState } from "react";
/* import { useForm } from "react-hook-form"; */
import SignupForm from "../SignupForm/SignupForm";
import "./LoginForm.css";
import { AppContext } from "../../../contexts/AppContext.js";

export default function LoginForm() {
  const { handleOpenPopup } = useContext(AppContext);
  /* const {
    register,
    formState: { errors },
  } = useForm(); */
  const signupPopup = { title: "Inscribirse", children: <SignupForm /> };
  const handleSubmit = (e) => {
    e.preventDefault();
    /* handleLogin(data); */
  };

  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, validationMessage } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
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
            /* {...register("email", {
              required: "La dirección de email es necesaria",
            })} */
            aria-invalid={errors.email ? "true" : "false"}
            className="form__input"
            placeholder="Introduce tu correo electrónico"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
          {/* {errors.email?.type === "required" && ( */}
          <span role="alert" className="form__input-error">
            errors.email
          </span>
          {/* )} */}
        </div>
        <div className="form__input-section">
          <label className="form__input-title" htmlFor="password">
            Contraseña
          </label>
          <input
            /* {...register("password", {
              required: "La contraseña es necesaria",
            })} */
            aria-invalid={errors.password ? "true" : "false"}
            className="form__input"
            placeholder="Introduce tu contraseña"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
          {/* {errors.password?.type === "required" && ( */}
          <span role="alert" className="form__input-error">
            errors.password
          </span>
          {/* )} */}
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
