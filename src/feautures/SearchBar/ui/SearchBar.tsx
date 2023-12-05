import React, { FC, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

type SearchBarProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => (
  <TextField fullWidth label="Search characters" value={value} onChange={onChange} />
);

export default SearchBar;
