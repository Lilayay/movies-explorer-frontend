import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="page">
      <div className="page__context">
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />

          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />

          <Route path="/movies" element={<Movies />} />

          <Route path="/saved-movies" element={<SavedMovies />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
