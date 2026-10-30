import { useContext, useState } from "react";
/* import { useForm } from "react-hook-form"; */
import { AppContext } from "../../../contexts/AppContext.js";
import LoginForm from "../LoginForm/LoginForm";
import "./SignupForm.css";

export default function SignupForm() {
  const { handleOpenPopup } = useContext(AppContext);
  /* const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); */
  const loginPopup = { title: "Iniciar Sesión", children: <LoginForm /> };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* handleSignup(data); */
  };

  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, validationMessage } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
  };

  return (
    <div className="signup">
      <form className="signup__form form" onSubmit={handleSubmit}>
        {/* <h2 className="form__title">Inscribirse</h2> */}
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
            required
          />
          {/* {errors.password?.type === "required" && ( */}
          <span role="alert" className="form__input-error">
            errors.password
          </span>
          {/* )} */}
        </div>
        <div className="form__input-section">
          <label className="form__input-title" htmlFor="username">
            Nombre de usuario
          </label>
          <input
            /* {...register("username", {
              required: "El nombre de usuario es necesario",
            })} */
            aria-invalid={errors.username ? "true" : "false"}
            className="form__input"
            placeholder="Introduce tu nombre de usuario"
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            required
          />
          {/* {errors.username?.type === "required" && ( */}
          <span role="alert" className="form__input-error">
            errors.username
          </span>
          {/* )} */}
        </div>
        <button type="submit" className="form__submit-button">
          Inscribirse
        </button>
        <div className="form__switch">
          {/* <p>o</p> */}
          <button
            type="button"
            className="form__switch-link"
            onClick={() => handleOpenPopup(loginPopup)}
          >
            o iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}
