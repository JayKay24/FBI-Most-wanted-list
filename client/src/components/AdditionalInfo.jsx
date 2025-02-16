/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import StyledAdditionalInfo from '../styled/components/AdditionalInfo';

const AdditionalInfo = ({ url, testId = 'additional-info' }) => {
  const [toggleAdditionalInfo, setToggleAdditionalInfo] = useState(false);
  
  return (
    <StyledAdditionalInfo onClick={() => setToggleAdditionalInfo(!toggleAdditionalInfo)} data-testid={testId}>
      { !toggleAdditionalInfo && (
        <div>
          Additional Information
        </div>
      )}
      {
        toggleAdditionalInfo && (
          <div onClick={(e) => e.stopPropagation()}>
            Additional Information: <a href={url} target='_blank'>Link</a>
          </div>
        )
      }
    </StyledAdditionalInfo>
  );
};

export default AdditionalInfo;
