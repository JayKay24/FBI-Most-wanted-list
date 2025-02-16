/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import MostWantedProfile from '../utils/mockMostWantedProfile.json';

import AdditionalInfo from '../components/AdditionalInfo';

describe('AdditionalInfo: rendering', () => {
  it('renders the url passed in', () => {
    let anchor;
    const testId = 'unit-test-additional-info';

    render(<AdditionalInfo url={MostWantedProfile.url} testId={testId} />);

    const additionalInfo = screen.getByTestId(testId);

    expect(additionalInfo).not.toBeNull();
    expect(additionalInfo).toHaveTextContent('Additional Information');

    anchor = screen.queryByRole('link', { name: /link/i });
  
    expect(anchor).not.toBeTruthy();

    fireEvent.click(screen.getByTestId(testId));

    anchor = screen.getByRole('link', { name: /link/i });

    expect(anchor).toBeTruthy();
    expect(anchor).toHaveTextContent('Link');
  });
});
