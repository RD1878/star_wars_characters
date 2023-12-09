import React, { FC, useEffect, useMemo, useState } from 'react';
import { CharactersList } from 'src/widgets/CharactersList';
import { CharactersPagination } from 'src/feautures/CharacterPagination';
import { SearchBar } from 'src/feautures/SearchBar';
import { useCharactersService } from '../model/services/charactersService';
import { CircularProgress, Grid, Typography } from '@mui/material';
import './styles.css';

const CharactersPage: FC = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const { characters, count, isFetching } = useCharactersService(page, debouncedSearchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

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

  const pagesCount = typeof count === 'number' ? Math.ceil(count / 10) : null;

  return (
    <>
      <Typography
        className={'charactersPageTitle'}
        variant="h1"
        component="div"
        align={'center'}
        margin={1}
      >
        Star Wars Characters
      </Typography>
      <Grid container sx={{ display: 'flex', flexWrap: 'nowrap' }}>
        <Grid item xs={6} sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {pagesCount === null ? (
            <CircularProgress
              size={70}
              sx={{ color: '#FFD700', position: 'absolute', top: '50%', left: '25%' }}
            />
          ) : (
            <>
              <SearchBar value={searchTerm} onChange={handleSearchChange} />
              {isFetching ? (
                <>
                  <CircularProgress
                    size={70}
                    sx={{ color: '#FFD700', position: 'absolute', top: '50%', left: '25%' }}
                  />
                </>
              ) : (
                <>
                  <CharactersList characters={charactersValues} />
                  {pagesCount === 0 ? (
                    <Typography
                      className={'charactersPageTitle'}
                      variant="h5"
                      component="div"
                      align={'center'}
                      margin={3}
                    >
                      Not found characters
                    </Typography>
                  ) : (
                    <CharactersPagination
                      page={page}
                      count={pagesCount}
                      onChange={handlePaginationChange}
                    />
                  )}
                </>
              )}
            </>
          )}
        </Grid>
        <Grid item xs={6} className="imageContainer" />
      </Grid>
    </>
  );
};

export default CharactersPage;
