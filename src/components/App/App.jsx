import { useState, useEffect } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext.js';
import newsApi from '../../utils/NewsApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import { setToken, getToken, removeToken } from '../../utils/Token.js';
import * as auth from '../../utils/Auth.js';
import mainApi from '../../utils/MainApi.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [popup, setPopup] = useState(null);
  const [search, setSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(3);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [userData, setUserData] = useState({ name: 'Elise' });

  useEffect(() => {
    if (!isLoggedIn) return;

    mainApi
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error('❌ Error cargando usuario:', err);
      });
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) return;

    mainApi
      .getArticles()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error('❌ Error cargando tarjetas:', err);
      });
  }, [isLoggedIn]);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  async function handleNewsSearch(keyword) {
    setSearch(true);
    setError('');
    setCount(3);
    setIsLoading(true);
    try {
      const articles = await newsApi.getNews(keyword);

      setCards(articles);
    } catch (error) {
      console.error('Error fetching news:', error);
      setCards([]);
      setError(
        'Lo sentimos, algo ha salido mal durante la solicitud. Puede que haya un problema de conexión o que el servidor no esté funcionando. Por favor, inténtalo más tarde.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          mainApi.setToken(data.token);
          setUserData({ email }); // guardar los datos de usuario en el estado
          setIsLoggedIn(true); // inicia la sesión del usuario
          /*   const redirectPath = '/';
          navigate(redirectPath); */
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log('no se ha proporcionado uno o más campos');
        } else if (err.status === 401) {
          console.log(
            'no se ha encontrado al usuario con el correo electrónico especificado'
          );
        }
      });
  };

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    auth
      .getUserInfo(jwt)
      .then(({ email }) => {
        setIsLoggedIn(true);
        mainApi.setToken(jwt);
        setUserData({ email });
      })
      .catch(() => {
        removeToken();
      });
  }, []);

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
        userData,
        handleLogin,
        currentUser,
      }}
    >
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
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
