/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import StyledMostWantedProfileMajorCard from '../styled/components/MostWantedProfileMajorCard';

const MostWantedProfileMajorCard = ({ wantedProfile, testId = 'major-card' }) => {
  const { 
    title,
    sex,
    hair,
    complexion,
    caution,
    occupations,
    subjects,
    eyes,
    field_offices,
    images,
  } = wantedProfile;

  return (
    <StyledMostWantedProfileMajorCard data-testid={testId}>
      <h2>Title: {title}</h2>
      <p>Sex: {sex}</p>
      <p>Hair: {hair}</p>
      <p>Complexion: {complexion}</p>
      <p>Eyes: {eyes}</p>
      <p>Occupations: {occupations.join(', ')}</p>
      <p>Subjects: {subjects.join(', ')}</p>
      <p>Field Offices: {field_offices.join(', ')}</p>
      <p>Caution: {caution}</p>
      <img src={images?.[0]?.large ?? ''} alt={images?.[0]?.caption ?? ''} width={270} height={270} />
    </StyledMostWantedProfileMajorCard>
  );
};

export default MostWantedProfileMajorCard;
