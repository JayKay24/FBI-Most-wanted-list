/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MostWantedProfile from '../../utils/mockMostWantedProfile.json';

import MostWantedProfileMinorCard from '../MostWantedProfileMinorCard';

describe('MostWantedProfileMinorCard: rendering', () => {
  it('renders fewer details of a most wanted profile', () => {
    const testId = 'unit-test-most-wanted-minor';

    render (<MostWantedProfileMinorCard testId={testId} wantedProfile={MostWantedProfile} />);

    const majorCard = screen.getByTestId(testId);

    expect(majorCard).not.toBeNull();
    expect(majorCard).not.toHaveTextContent(MostWantedProfile.eyes);
    expect(majorCard).toHaveTextContent(MostWantedProfile.title);
  });
});
