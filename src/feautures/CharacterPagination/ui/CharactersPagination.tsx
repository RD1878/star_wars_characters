import React, { FC, ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import './styles.css';

interface ICharactersPagination {
  page: number;
  count: number;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const CharactersPagination: FC<ICharactersPagination> = ({ page, count, onChange }) => (
  <Pagination
    className={'pagination'}
    size={'large'}
    sx={{ color: '#FFD700' }}
    count={count}
    page={page}
    onChange={onChange}
  />
);

export default CharactersPagination;
