// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import PuffLoader from 'react-spinners/PuffLoader';
import useFetchMostWantedProfiles from '../hooks/useFetchMostWantedProfiles';
import HttpClient from '../config/httpClient';
import MostWantedProfileMajorCard from '../components/MostWantedProfileMajorCard';
import StyledDisplayMostWantedProfile from '../styled/pages/DisplayMostWantedProfile';

const DisplayMostWantedProfile = () => {
  const { id: wantedProfileId } = useParams();
  const { data: wantedProfile, isLoading } = useFetchMostWantedProfiles(`${HttpClient.baseURL}/${wantedProfileId}`);

  return (
    <StyledDisplayMostWantedProfile>
      {isLoading && (<PuffLoader size={150} color='cyan' />)}
      {
        wantedProfile && (
          <MostWantedProfileMajorCard wantedProfile={wantedProfile} />
        )
      }
    </StyledDisplayMostWantedProfile>
  );
};

export default DisplayMostWantedProfile;
