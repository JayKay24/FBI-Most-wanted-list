/* eslint-disable react/prop-types */
import React from 'react';

const MostWantedProfileMinorCard = ({ wantedProfile }) => {
  const { subjects, sex, images, title } = wantedProfile;

  return (
    <div>
      <img src={images[0].thumb} alt={images[0].caption} />
      <h3>Name: {title}</h3>
      <p>Sex: {sex}</p>
      <p>Subjects: {subjects[0] ? subjects[0] : 'None'}</p>
    </div>
  );
};

export default MostWantedProfileMinorCard;
