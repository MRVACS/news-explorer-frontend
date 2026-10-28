import About from "../About/About";
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext.js";
import LoginForm from "../PopupWithForm/LoginForm/LoginForm";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import PreLoader from "../PreLoader/PreLoader.jsx";
import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import "./Main.css";

export default function Main(props) {
  const { search, cards, isLoading } = useContext(AppContext);
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
          {isLoading && (
            <div className="main__loading">
              <PreLoader />
            </div>
          )}
          <NewsCardList />
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
