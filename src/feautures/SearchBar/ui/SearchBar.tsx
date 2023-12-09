import React, { FC, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import './styles.css';

type SearchBarProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => (
  <TextField
    className={'searchInput'}
    fullWidth
    placeholder="Search characters"
    value={value}
    sx={{ border: '0.5px solid #FFD700', color: '#FFD700' }}
    margin={'normal'}
    onChange={onChange}
  />
);

export default SearchBar;
