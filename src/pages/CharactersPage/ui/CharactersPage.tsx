import React, { FC, useEffect, useMemo, useState } from 'react';
import { CharactersList } from 'src/widgets/CharactersList';
import { CharactersPagination } from 'src/feautures/CharacterPagination';
import { SearchBar } from 'src/feautures/SearchBar';
import { useCharactersService } from '../model/services/charactersService';
import { CircularProgress, Grid, Typography } from '@mui/material';
import './styles.css';
import usePrevious from '../lib/usePreviousHook';

const CharactersPage: FC = () => {
  const [page, setPage] = useState(1);
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const { characters, count, isFetching } = useCharactersService(page, searchTerm);

  const previousSearchFieldValue = usePrevious(searchFieldValue);

  const charactersValues = useMemo(() => Object.values(characters), [characters]);

  useEffect(() => {
    if (previousSearchFieldValue && !searchFieldValue) {
      handleSearch();
    }
  }, [previousSearchFieldValue, searchFieldValue]);

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFieldValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(searchFieldValue);
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
              <SearchBar
                value={searchFieldValue}
                isFetching={isFetching}
                onChange={handleSearchFieldChange}
                onSearch={handleSearch}
              />
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
                  {!charactersValues.length ? (
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
