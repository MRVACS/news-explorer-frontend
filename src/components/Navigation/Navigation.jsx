import { useContext } from "react";
import { NavLink, /* useNavigate, */ useLocation } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext.js";
import "./Navigation.css";
import logoutIcon from "../../images/logout.png";
import LoginForm from "../PopupWithForm/LoginForm/LoginForm";

export default function Navigation() {
  /*  const navigate = useNavigate(); */
  const { isLoggedIn, userData, handleOpenPopup } = useContext(AppContext);
  const location = useLocation();
  /*  const mainPage = location.pathname === "/";
  const savedNewsPage = location.pathname === "/saved-news"; */
  const loginPopup = { title: "Iniciar Sesión", children: <LoginForm /> };
  return (
    <div className="navigation">
      <ul className="navigation__nav">
        <li className="navigation__nav-item">
          <NavLink to="/" className="navigation__link">
            Inicio
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className="navigation__nav-item">
            <NavLink to="/saved-news" className="navigation__link">
              Artículos guardados
            </NavLink>
          </li>
        )}
        <li className="navigation__nav-item">
          <button
            className="navigation__button"
            onClick={() => handleOpenPopup(loginPopup)}
          >
            <p className="navigation__button-text">
              {isLoggedIn ? userData.name : "Iniciar Sesión"}
            </p>
            <img className="navigation__icon" src={logoutIcon}></img>
          </button>
        </li>
      </ul>
    </div>
  );
}
