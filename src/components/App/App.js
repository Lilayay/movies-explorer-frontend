import React from "react";
import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

import NotFound from "../NotFound/NotFound";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useState, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import * as api from "../../utils/MainApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  //проверка токена и вход
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      api
        .getContext(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate("/movies");
          }
        })
        .catch((err) => {
          console.log("Ошибка при проверке токена: ", err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log("Ошибка при загрузке данных пользователя: ", err);
        });

      api
        .getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies.reverse());
          navigate("/movies");
        })
        .catch((err) => {
          console.log("Ошибка при загрузке фильмов: ", err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  //регистрация
  function handleSignUp({ name, email, password }) {
    api
      .signup(name, email, password)
      .then(() => {
        setMessage("");
        handleLogin({ email, password });
        navigate("/movies");
      })
      .catch((err) => {
        if (err.includes(409)) {
          setMessage("Пользователь с таким email уже существует");
        } else {
          setMessage("При регистрации пользователя произошла ошибка");
        }
      });
  }

  //авторизация
  function handleLogin({ email, password }) {
    setIsLoading(true);
    api
      .login(email, password)
      .then((res) => {
        if (res) {
          setMessage("");
          setIsLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          navigate("/movies");
        }
      })
      .catch((err) => {
        if (err.includes(401)) {
          setMessage("Неверный логин или пароль");
        } else {
          setMessage("При авторизации произошла ошибка");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //редактирование пользователя
  function handleChangeUser(data) {
    setIsLoading(true);
    api
      .changeUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        if (err.includes(409)) {
          setMessage("Пользователь с таким email уже существует");
        } else {
          setMessage("При обновлении профиля произошла ошибка");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //сохранение фильма
  function handleSaveMovie(movie) {
    api
      .postMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => {
        console.log("Ошибка при сохранении фильма: ", err);
        handleLoggedOut(err);
      });
  }

  //удаление фильма
  function handleDeleteMovie(movie) {
    api
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => {
        console.log("Ошибка при удалении фильма: ", err);
        handleLoggedOut(err);
      });
  }

  //ошибка авторизации
  function handleLoggedOut(err) {
    if (err === "Error: 401") {
      handleSignOut();
    }
  }

  // выход
  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("allMovies");
    localStorage.removeItem("movies");
    localStorage.removeItem("shortFilms");
    localStorage.removeItem("movieSearch");
    setMessage("");
    navigate("/signin");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__context">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />

            <Route
              path="/signin"
              element={
                isLoggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Login
                    onLogin={handleLogin}
                    isLoading={isLoading}
                    message={message}
                  />
                )
              }
            />
            <Route
              path="/signup"
              element={
                isLoggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Register
                    onRegister={handleSignUp}
                    isLoading={isLoading}
                    message={message}
                  />
                )
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  component={Profile}
                  isLoggedIn={isLoggedIn}
                  signOut={handleSignOut}
                  onChangeUser={handleChangeUser}
                  isLoading={isLoading}
                  message={message}
                />
              }
            />

            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  component={Movies}
                  savedMovies={savedMovies}
                  isLoggedIn={isLoggedIn}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              }
            />

            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  component={SavedMovies}
                  savedMovies={savedMovies}
                  isLoggedIn={isLoggedIn}
                  handleDeleteMovie={handleDeleteMovie}
                />
              }
            />

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
