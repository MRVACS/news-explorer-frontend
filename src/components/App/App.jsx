import { useState /* useEffect */ } from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext.js";
import newsApi from "../../utils/NewsApi.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [popup, setPopup] = useState(null);
  const [search, setSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(3);
  const [error, setError] = useState("");

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  async function handleNewsSearch(keyword) {
    setSearch(true);
    setError("");
    setCount(3);
    setIsLoading(true);
    try {
      const articles = await newsApi.getNews(keyword);

      setCards(articles);
    } catch (error) {
      console.error("Error fetching news:", error);
      setCards([]);
      setError(
        "Lo sentimos, algo ha salido mal durante la solicitud. Puede que haya un problema de conexión o que el servidor no esté funcionando. Por favor, inténtalo más tarde."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        popup,
        handleClosePopup,
        cards,
        savedCards,
        setSavedCards,
        handleOpenPopup,
        handleNewsSearch,
        search,
        isLoading,
        count,
        setCount,
        error,
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
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute>
                <SavedNews />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
