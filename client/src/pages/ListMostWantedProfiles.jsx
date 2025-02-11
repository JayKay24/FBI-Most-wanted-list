// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchMostWantedProfiles from '../hooks/useFetchMostWantedProfiles';
import HttpClient from '../config/httpClient';
import MostWantedProfileMinorCard from '../components/MostWantedProfileMinorCard';

const ListMostWantedProfiles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { 
    data: { 
      wantedProfiles,
      totalPages,
    }, 
    isLoading } = useFetchMostWantedProfiles(HttpClient.baseURL, currentPage, HttpClient.itemsPerPage);

  return (
    <>
      {isLoading && (<span>Loading...</span>)}
      {wantedProfiles?.length == 0 && (<div>Currently, there are no wanted profiles. Please check back later</div>)}
      {wantedProfiles?.map((wantedProfile) => (
        <Link key={wantedProfile._id} to={`/wanted_profiles/${wantedProfile._id}`}>
          <MostWantedProfileMinorCard key={wantedProfile._id} wantedProfile={wantedProfile} />
        </Link>
      ))}
    </>
  );
};

export default ListMostWantedProfiles;
