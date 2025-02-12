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
      <p>Occupations: {occupations ? occupations.join(', ') : ''}</p>
      <p>Subjects: {subjects ? subjects.join(', ') : ''}</p>
      <p>Field Offices: {field_offices ? field_offices.join(', ') : ''}</p>
      <img src={images ? images[0].large : ''} alt={images ? images[0].caption : ''} width={270} height={270} />
    </StyledMostWantedProfileMajorCard>
  );
};

export default MostWantedProfileMajorCard;
