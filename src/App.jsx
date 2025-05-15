import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

// Lazy load des autres pages
const Archives = lazy(() => import('./pages/Archives'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const Galerie = lazy(() => import('./pages/Galerie'));
const Presse = lazy(() => import('./pages/Presse'));

import "./index.css";

const App = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="archives/:id" element={<EventDetail />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/presse" element={<Presse />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
