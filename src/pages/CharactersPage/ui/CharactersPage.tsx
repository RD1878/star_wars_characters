import React, { FC, useState } from 'react';
import { CharactersList } from 'src/widgets/CharactersList';
import { CharactersPagination } from 'src/feautures/CharacterPagination';
import { SearchBar } from 'src/feautures/SearchBar';
import { useCharactersService } from '../model/services/useCharacterService';

const CharactersPage: FC = () => {
  const [page, setPage] = useState(1);
  const { characters, count } = useCharactersService(page);

  console.log('characters', characters);

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const pagesCount = Math.ceil(count / 10);

  return (
    <>
      <CharactersPagination page={page} count={pagesCount} onChange={handlePaginationChange} />
      {/*<SearchBar value={} onChange={}*/}
      <CharactersList characters={characters} />
    </>
  );
};

export default CharactersPage;
