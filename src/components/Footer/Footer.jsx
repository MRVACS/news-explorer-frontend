import { NavLink, useNavigate, useLocation } from "react-router-dom";
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
          <a className="footer__link" href="https://tripleten.com">
            Practicum
          </a>
        </div>
        <div className="footer__links-social">
          <button className="footer__button">
            {/* <img className="footer__icon" src={gitLogo} alt="GitHubLink" /> */}
            <a
              className="footer__icon"
              href="https://github.com/MRVACS"
              src={gitLogo}
              aria-label="GitHub"
            />
          </button>
          <button className="footer__button">
            <a
              className="footer__icon"
              href="https://www.facebook.com/camilovaca.aa/"
              src={fbLogo}
              aria-label="Facebook"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
