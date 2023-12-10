import React from 'react';
import { ICharacter } from 'src/shared/types/types';
import CharacterCard from './CharacterCard';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('CharacterCard Component', () => {
  const character: ICharacter = {
    id: '1',
    name: 'Luke Skywalker',
    birthYear: '19BBY',
    height: '172',
    mass: '77',
    eyeColor: 'blue',
    hairColor: 'blond',
    skinColor: 'fair',
    gender: 'male',
  };

  test('displays character information', () => {
    render(<CharacterCard character={character} />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Birth year: 19BBY')).toBeInTheDocument();
    expect(screen.getByText('Height: 172 cm')).toBeInTheDocument();
    expect(screen.getByText('Mass: 77 kg')).toBeInTheDocument();
  });

  test('navigates on card click', () => {
    render(<CharacterCard character={character} />);
    fireEvent.click(screen.getByText('Luke Skywalker'));
    expect(mockNavigate).toHaveBeenCalledWith(`/character/${character.id}`);
  });
});
