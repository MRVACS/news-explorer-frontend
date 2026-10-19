import { NavLink, useNavigate, useLocation } from "react-router-dom";
import fbLogo from "../../images/fb.png";
import gitLogo from "../../images/github.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__trademark">
        <h3 className="footer__text">
          &copy; 2021 Supersite, Powered by News API
        </h3>
      </div>
      <div className="footer__links">
        {/*  <ul className="footer__list">
          <li className="footer__list-item">
            <NavLink to="/" className="footer__link">
              Inicio
            </NavLink>
          </li>
          <li>
            <a className="footer__link" href="https://tripleten.com">
              Practicum
            </a>
          </li>
          <li className="footer__list-item">
            <button className="footer__button">
              <img src={gitLogo} alt="GitHubLink" />
            </button>
          </li>
          <li className="footer__list-item">
            <button className="footer__button">
              <img src={fbLogo} alt="FacebookLink" />
            </button>
          </li>
        </ul> */}
        <div className="footer__links-local">
          <NavLink to="/" className="footer__link">
            Inicio
          </NavLink>
          <a className="footer__link" href="https://tripleten.com">
            Practicum
          </a>
        </div>
        <div className="footer__links-social">
          <button className="footer__button">
            <img className="footer__icon" src={gitLogo} alt="GitHubLink" />
          </button>
          <button className="footer__button">
            <img className="footer__icon" src={fbLogo} alt="FacebookLink" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
