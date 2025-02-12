/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import StyledMostWantedProfileMinorCard from '../styled/components/MostWantedProfileMinorCard';

const MostWantedProfileMinorCard = ({ wantedProfile, testId = 'minor-card' }) => {
  const { subjects, sex, images, title } = wantedProfile;

  return (
    <StyledMostWantedProfileMinorCard data-testId={testId}>
      <img src={images ? images[0].thumb : ''} alt={images ? images[0].caption : ''} />
      <h3>Name: {title}</h3>
      <p>Sex: {sex}</p>
      <p>Subjects: {subjects ? subjects.join(', ') : ''}</p>
    </StyledMostWantedProfileMinorCard>
  );
};

export default MostWantedProfileMinorCard;
