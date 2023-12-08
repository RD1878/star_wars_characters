import React, { FC, useEffect, useMemo, useState } from 'react';
import { CharactersList } from 'src/widgets/CharactersList';
import { CharactersPagination } from 'src/feautures/CharacterPagination';
import { SearchBar } from 'src/feautures/SearchBar';
import { useCharactersService } from '../model/services/charactersService';

const CharactersPage: FC = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const { characters, count } = useCharactersService(page, debouncedSearchTerm);
  // console.log('characters', characters);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000); // Задержка в 500 мс

    return () => clearTimeout(timerId); // Очистка таймера
  }, [searchTerm]);

  const charactersValues = useMemo(() => Object.values(characters), [characters]);

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const pagesCount = Math.ceil(count / 10);

  return (
    <>
      <CharactersPagination page={page} count={pagesCount} onChange={handlePaginationChange} />
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <CharactersList characters={charactersValues} />
    </>
  );
};

export default CharactersPage;
