import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { CharactersPage } from 'src/pages/CharactersPage';
import { CharacterPage } from 'src/pages/CharacterPage';
import { routes } from 'src/shared/routes/routes';

const AppRouter = () => (
  <Router basename="/">
    <Routes>
      <Route path={routes.home} element={<CharactersPage />} />
      <Route path={`${routes.character}:id`} element={<CharacterPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
