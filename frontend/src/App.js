import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import LoginScreen from "./screens/LoginScreen";

import user from "./data/user";
import ProfileScreen from "./screens/ProfileScreen";
import { useState } from "react";

function App() {
  const [token, setToken] = useState();
   
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Router>
        <Header user={user} />
        {token ? (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        ) : (
          <LoginScreen setToken={setToken} />
        )}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
