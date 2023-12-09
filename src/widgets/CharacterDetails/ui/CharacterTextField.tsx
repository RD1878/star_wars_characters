import React, { ChangeEvent, FC } from 'react';
import { Grid, TextField } from '@mui/material';
import './styles.css';

interface CharacterTextFieldProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CharacterTextField: FC<CharacterTextFieldProps> = ({ label, value, onChange }) => (
  <Grid item xs={12} md={6}>
    <TextField
      className={'characterTextField'}
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
    />
  </Grid>
);

export default CharacterTextField;
