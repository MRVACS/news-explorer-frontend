import { useState, useEffect } from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext.js";
import newsApi from "../../utils/NewsApi.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [popup, setPopup] = useState(null);
  const [search, setSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(3);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  async function handleNewsSearch(keyword) {
    setCount(3);
    setIsLoading(true);
    try {
      const articles = await newsApi.getNews(keyword);
      setIsLoading(false);
      setCards(articles);
      setSearch(true);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        cards,
        savedCards,
        handleOpenPopup,
        handleNewsSearch,
        search,
        isLoading,
        count,
        setCount,
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
    </AppContext.Provider>
  );
}

export default App;
