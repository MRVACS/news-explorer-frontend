import { useState, useEffect } from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TheContext } from "../../contexts/TheContext.js";
import newsApi from "../../utils/NewsApi.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [popup, setPopup] = useState(null);
  const [search, setSearch] = useState(false);

  /*  useEffect(() => {
    newsApi
      .getNews()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); */

  /* useEffect(() => {
    if (!isLoggedIn) return;
    savednewsApi
      .getNews()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedIn]); */

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  async function handleNewsSearch(keyword) {
    try {
      const articles = await newsApi.getNews(keyword);

      setCards(articles);
      console.log(cards);
      setSearch(true);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  return (
    <TheContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        cards,
        savedCards,
        handleOpenPopup,
        handleNewsSearch,
        search,
      }}
    >
      <div className="page">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleOpenPopup={(popup) => handleOpenPopup(popup)}
                handleClosePopup={() => handleClosePopup()}
                popup={popup}
              />
            }
          ></Route>
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
        <Footer />
      </div>
    </TheContext.Provider>
  );
}

export default App;
