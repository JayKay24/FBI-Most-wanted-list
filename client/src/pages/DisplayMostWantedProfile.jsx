import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMostWantedProfiles from '../hooks/useFetchMostWantedProfiles';
import HttpClient from '../config/httpClient';
import MostWantedProfileMajorCard from '../components/MostWantedProfileMajorCard';

const DisplayMostWantedProfile = () => {
  const { id: wantedProfileId } = useParams();
  const { data: wantedProfile, isLoading } = useFetchMostWantedProfiles(`${HttpClient.baseURL}/${wantedProfileId}`);

  return (
    <>
      {isLoading && (<span>Loading...</span>)}
      {wantedProfile && (
        <MostWantedProfileMajorCard wantedProfile={wantedProfile} />
      )}
    </>
  );
};

export default DisplayMostWantedProfile;
