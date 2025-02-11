// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const MostWantedProfileMinorCard = ({ subjects, name, sex, images }) => {
  return (
    <div>
      <img src={images[0].thumb} alt={images[0].caption} />
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
  images: PropTypes.arrayOf(PropTypes.shape({
    large: PropTypes.string,
    caption: PropTypes.string,
    thumb: PropTypes.string,
    original: PropTypes.string,
  })).isRequired,
};

export default MostWantedProfileMinorCard;
