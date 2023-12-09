import React, { FC, ChangeEvent, KeyboardEvent } from 'react';
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';

interface ISearchBar {
  value: string;
  isFetching: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar: FC<ISearchBar> = ({ value, isFetching, onChange, onSearch }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const renderInputProps = () => ({
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
  });

  return (
    <TextField
      className={'searchInput'}
      fullWidth
      autoFocus
      placeholder="Search characters"
      value={value}
      margin={'normal'}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      disabled={isFetching}
      InputProps={renderInputProps()}
    />
  );
};

export default SearchBar;
