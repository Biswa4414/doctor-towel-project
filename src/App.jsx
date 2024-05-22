import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FloatingButton from "./Components/floatingButton/FloatingButton";
import AIChat from "./pages/AIChat";
import Consultation from "./pages/Consultation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" component={<Consultation />} />
        <Route path="/ai-chat" component={<AIChat />} />
      </Routes>
      <FloatingButton />
    </Router>
  );
};

export default App;
