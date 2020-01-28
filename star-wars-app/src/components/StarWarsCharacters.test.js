import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

jest.mock('../api');

test('string', async () => {

});



test('Page Renders and API is called', async () => {
    mockGetData.mockResolvedValueOnce({ results: [{ name: 'R2-D2' }] });
    //Page Renders
    render(<StarWarsCharacters />);
    //API called
    expect(mockGetData).toHaveBeenCalledTimes(1)
    //Check my Buttons
    const { getByText } = render(<StarWarsCharacters />)
    const next = getByText(/next/i)
    fireEvent.click(next)
    const prev = getByText(/previous/i)
    fireEvent.click(prev)

});


