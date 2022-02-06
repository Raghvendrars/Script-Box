import logo from "./logo.svg";
import React, { lazy, Suspense, suspense } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Header from "./Pages/ComponentView/Headers/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/headers" element={<Header />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
