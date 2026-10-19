import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import line from "../../images/bg.png";
import "./Header.css";

export default function Header(props) {
  const { handleOpenPopup } = props;
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <h2 className="header__title">News Explorer</h2>
          <Navigation />
        </div>
        <div className="header__search">
          <SearchForm />
        </div>
      </div>
      {/* <img className="header__line" src={line} alt="Line" /> */}
    </header>
  );
}
