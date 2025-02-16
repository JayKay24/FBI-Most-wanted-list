/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MostWantedProfile from '../../utils/mockMostWantedProfile.json';

import MostWantedProfileMajorCard from '../MostWantedProfileMajorCard';

describe('MostWantedProfileMajorCard: rendering', () => {
  it('renders the majority of the details of a most wanted profile', () => {
    const testId = 'unit-test-most-wanted-major';

    render (<MostWantedProfileMajorCard testId={testId} wantedProfile={MostWantedProfile} />);

    const majorCard = screen.getByTestId(testId);

    expect(majorCard).not.toBeNull();
    expect(majorCard).toHaveTextContent(MostWantedProfile.sex);
    expect(majorCard).toHaveTextContent(MostWantedProfile.title);
  });
});
