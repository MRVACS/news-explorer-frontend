import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <p className="header__title">News Explorer</p>
          <Navigation />
        </div>
        <div className="header__search">
          <SearchForm />
        </div>
      </div>
    </header>
  );
}
