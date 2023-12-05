import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CharactersPage } from 'src/pages/CharactersPage';
import { CharacterPage } from 'src/pages/CharacterPage';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CharactersPage />} />
      <Route path="/character/:id" element={<CharacterPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
