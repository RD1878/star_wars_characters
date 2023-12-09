import React, { FC, ChangeEvent, KeyboardEvent } from 'react';
import TextField from '@mui/material/TextField';
import './styles.css';
import { IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {
  value: string;
  isFetching: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

const SearchBar: FC<SearchBarProps> = ({ value, isFetching, onChange, onSearch }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <TextField
      className={'searchInput'}
      fullWidth
      placeholder="Search characters"
      value={value}
      margin={'normal'}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              className={isFetching ? 'searchButtonDisabled' : 'searchButton'}
              disabled={isFetching}
              onClick={onSearch}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
