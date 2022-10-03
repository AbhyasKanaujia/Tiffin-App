import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";

import user from "./data/user";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Router>
        <Header user={user} />
        <Container className="my-3">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/search" element={<SearchScreen />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
