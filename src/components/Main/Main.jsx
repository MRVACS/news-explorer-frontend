import About from "../About/About";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext.js";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import PreLoader from "../LoadingCircle/LoadingCircle.jsx";
import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import "./Main.css";

export default function Main(/* props */) {
  const { search, cards, isLoading, popup, handleClosePopup, error } =
    useContext(AppContext);
  return (
    <main className="main">
      {search && (
        <section className="main__mid">
          {isLoading && (
            <div className="main__loading">
              <PreLoader />
            </div>
          )}
          {!isLoading && error && <p className="main__message">{error}</p>}
          {!isLoading && !error && cards.length === 0 && (
            <p className="main__message">No se ha encontrado nada</p>
          )}
          {!isLoading && !error && cards.length > 0 && (
            <>
              <div className="main__mid-header">
                <h2 className="main__mid-title">Resultados de la búsqueda</h2>
              </div>
              <NewsCardList />
            </>
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
