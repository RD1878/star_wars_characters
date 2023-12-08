import React, { FC } from 'react';
import { CharacterDetails } from 'src/widgets/CharacterDetails';
import { useParams } from 'react-router-dom';

const CharacterPage: FC = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Не найден</div>;
  }

  return <CharacterDetails id={id} />;
};

export default CharacterPage;
