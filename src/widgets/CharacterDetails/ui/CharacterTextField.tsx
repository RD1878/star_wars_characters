import React, { ChangeEvent, FC } from 'react';
import { Grid, TextField } from '@mui/material';
import './styles.css';

interface ICharacterTextField {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CharacterTextField: FC<ICharacterTextField> = ({ label, value, onChange }) => (
  <Grid item xs={12} md={6}>
    <TextField
      className={'characterTextField'}
      required
      error={!value}
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
    />
  </Grid>
);

export default CharacterTextField;
