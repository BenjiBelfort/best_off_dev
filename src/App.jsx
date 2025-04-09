import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Archives from "./pages/Archives";
import EventDetail from './pages/EventDetail';
import Galerie from "./pages/Galerie";
import Presse from "./pages/Presse";
import Auditions from "./pages/Auditions";


import "./index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Page par défaut */}
        <Route path="/archives" element={<Archives />} />
        <Route path="archives/:id" element={<EventDetail />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/presse" element={<Presse />} />
        <Route path="/auditions" element={<Auditions />} />
      </Route>
    </Routes>
  );
};

export default App;