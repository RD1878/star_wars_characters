import React, { FC, ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';

type CharactersPaginationProps = {
  page: number;
  count: number;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
};

const CharactersPagination: FC<CharactersPaginationProps> = ({ page, count, onChange }) => (
  <Pagination count={count} page={page} onChange={onChange} />
);

export default CharactersPagination;
