// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMostWantedProfiles from '../hooks/useFetchMostWantedProfiles';
import HttpClient from '../config/httpClient';
import MostWantedProfileMajorCard from '../components/MostWantedProfileMajorCard';
import StyledDisplayMostWantedProfile from '../styled/components/DisplayMostWantedProfile';

const DisplayMostWantedProfile = () => {
  const { id: wantedProfileId } = useParams();
  const { data: wantedProfile, isLoading } = useFetchMostWantedProfiles(`${HttpClient.baseURL}/${wantedProfileId}`);

  return (
    <StyledDisplayMostWantedProfile>
      {isLoading && (<span>Loading...</span>)}
      {wantedProfile && (
        <MostWantedProfileMajorCard wantedProfile={wantedProfile} />
      )}
    </StyledDisplayMostWantedProfile>
  );
};

export default DisplayMostWantedProfile;
