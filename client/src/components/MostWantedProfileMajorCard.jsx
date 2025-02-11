/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const MostWantedProfileMajorCard = ({ wantedProfile }) => {
  const { 
    name,
    sex,
    hair,
    occupations,
    subjects,
    field_offices,
    images,
    pathId
  } = wantedProfile;

  return (
    <div>
      <h2>{name}</h2>
      <p>Sex: {sex}</p>
      <p>Hair: {hair}</p>
      <p>Occupations: {occupations.join(', ')}</p>
      <p>Subjects: {subjects.join(', ')}</p>
      <p>Field Offices: {field_offices.join(', ')}</p>
      <img src={images[0].large} alt={images[0].caption} />
      <p>More Details: {pathId}</p>
    </div>
  );
};

export default MostWantedProfileMajorCard;
