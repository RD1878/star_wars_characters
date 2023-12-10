import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom';

describe('SearchBar Component', () => {
  test('renders SearchBar with the correct value', () => {
    const onChangeMock = jest.fn();
    const onSearchMock = jest.fn();

    render(
      <SearchBar value="Test" isFetching={false} onChange={onChangeMock} onSearch={onSearchMock} />
    );
    const inputElement = screen.getByPlaceholderText('Search characters') as HTMLInputElement;
    expect(inputElement.value).toBe('Test');
  });

  test('calls onChange when typing in the search field', () => {
    const onChangeMock = jest.fn();
    const onSearchMock = jest.fn();

    render(
      <SearchBar value="" isFetching={false} onChange={onChangeMock} onSearch={onSearchMock} />
    );
    const inputElement = screen.getByPlaceholderText('Search characters');
    fireEvent.change(inputElement, { target: { value: 'Luke' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  test('calls onSearch when Enter is pressed', () => {
    const onChangeMock = jest.fn();
    const onSearchMock = jest.fn();

    render(
      <SearchBar value="Luke" isFetching={false} onChange={onChangeMock} onSearch={onSearchMock} />
    );
    const inputElement = screen.getByPlaceholderText('Search characters');
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    expect(onSearchMock).toHaveBeenCalledTimes(1);
  });

  test('search button is disabled when isFetching is true', () => {
    const onChangeMock = jest.fn();
    const onSearchMock = jest.fn();

    render(
      <SearchBar value="Luke" isFetching={true} onChange={onChangeMock} onSearch={onSearchMock} />
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });
});
