import React, { FC } from 'react';
import { CharactersList } from 'src/widgets/CharactersList';
import { CharactersPagination } from 'src/feautures/CharacterPagination';
import { SearchBar } from 'src/feautures/SearchBar';

const CharactersPage: FC = () => {
  return (
    <>
      {/*<CharactersPagination page={} count={} onChange={}*/}
      {/*<SearchBar value={} onChange={}*/}
      <CharactersList characters={[]} />
    </>
  );
};

export default CharactersPage;
