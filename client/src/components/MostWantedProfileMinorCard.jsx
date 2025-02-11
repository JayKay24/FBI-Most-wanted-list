import React from 'react';
import PropTypes from 'prop-types';

const MostWantedProfileMinorCard = ({ subjects, name, sex }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Sex: {sex}</p>
      <p>Subjects: {subjects[0]}</p>
    </div>
  );
};

MostWantedProfileMinorCard.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
};

export default MostWantedProfileMinorCard;
