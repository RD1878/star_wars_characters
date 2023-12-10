import React from 'react';
import { render, screen } from '@testing-library/react';
import CharactersList from './CharactersList';
import { ICharacter } from 'src/shared/types/types';
import '@testing-library/jest-dom';

jest.mock('src/entities/CharacterCard', () => ({
  CharacterCard: ({ character }: { character: ICharacter }) => <div>{character.name}</div>,
}));

describe('CharactersList Component', () => {
  const mockCharacters = [
    {
      id: '1',
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hairColor: 'blond',
      skinColor: 'fair',
      eyeColor: 'blue',
      birthYear: '19BBY',
      gender: 'male',
    },
    {
      id: '4',
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      hairColor: 'none',
      skinColor: 'white',
      eyeColor: 'yellow',
      birthYear: '41.9BBY',
      gender: 'male',
    },
  ];

  test('renders a list of characters', () => {
    render(<CharactersList characters={mockCharacters} />);

    const firstCharacter = screen.getByText('Luke Skywalker');
    const secondCharacter = screen.getByText('Darth Vader');

    expect(firstCharacter).toBeInTheDocument();
    expect(secondCharacter).toBeInTheDocument();
  });
});
