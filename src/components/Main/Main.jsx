/* import SearchForm from "../SearchForm/SearchForm"; */
import About from "../About/About";
import { useContext, useState } from "react";
import { TheContext } from "../../contexts/TheContext.js";
import LoginForm from "../PopupWithForm/LoginForm/LoginForm";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import NewsCard from "../NewsCard/NewsCard";
import "./Main.css";

export default function Main(props) {
  const { search, cards } = useContext(TheContext);
  const [count, setCount] = useState(3);
  const { popup, handleOpenPopup, handleClosePopup } = props;
  const loginPopup = { title: "Iniciar Sesión", children: <LoginForm /> };
  return (
    <main className="main">
      {/* <section className="main__above">
        <SearchForm />
      </section> */}
      {search && (
        <section className="main__mid">
          <div className="main__mid-header">
            <h1 className="main__mid-title">Resultados de la búsqueda</h1>
          </div>
          <div className="main__content">
            {cards.slice(0, count).map((card) => (
              <NewsCard key={card.url} card={card} />
            ))}
          </div>
          {count < cards.length && (
            <button
              type="button"
              className="main__content-button"
              onClick={() => setCount(count + 3)}
            >
              Ver más
            </button>
          )}
        </section>
      )}
      <section className="main__below">
        <About />
      </section>
      {popup && (
        <PopupWithForm onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </PopupWithForm>
      )}
    </main>
  );
}
