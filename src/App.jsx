import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Archives from "./pages/Archives";
import EventDetail from './pages/EventDetail';
import Galerie from "./pages/Galerie";
import Presse from "./pages/Presse";
import Partenaires from "./pages/Partenaires";
import Auditions from "./pages/Auditions";
import Contact from "./pages/Contact";


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
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/auditions" element={<Auditions />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;