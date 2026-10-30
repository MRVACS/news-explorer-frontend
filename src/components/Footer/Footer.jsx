import { NavLink /* useNavigate, useLocation */ } from "react-router-dom";
import fbLogo from "../../images/fb.png";
import gitLogo from "../../images/github.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__trademark">
        <p className="footer__text">
          &copy; 2021 Supersite, Powered by News API
        </p>
      </div>
      <div className="footer__links">
        <div className="footer__links-local">
          <NavLink to="/" className="footer__link">
            Inicio
          </NavLink>
          <a
            className="footer__link"
            href="https://tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Practicum"
          >
            Practicum
          </a>
        </div>
        <div className="footer__links-social">
          <a
            className="footer__button"
            href="https://github.com/MRVACS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img className="footer__icon" src={gitLogo} alt="Github logo" />
          </a>
          <a
            className="footer__button"
            href="https://www.facebook.com/camilovaca.aa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img className="footer__icon" src={fbLogo} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
