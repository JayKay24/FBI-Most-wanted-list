// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchMostWantedProfiles from '../hooks/useFetchMostWantedProfiles';
import HttpClient from '../config/httpClient';
import MostWantedProfileMinorCard from '../components/MostWantedProfileMinorCard';
import Paginator from '../components/Paginator';

const ListMostWantedProfiles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { 
    data, 
    isLoading } = useFetchMostWantedProfiles(HttpClient.baseURL, currentPage, HttpClient.itemsPerPage);

  return (
    <div>
      {isLoading && (<span>Loading...</span>)}
      {data && data.wantedProfiles?.length ===0 && (<div>Currently, there are no wanted profiles. Please check back later</div>)}
      {data && data.wantedProfiles?.map((wantedProfile) => (
        <Link key={wantedProfile._id} to={`/wanted_profiles/${wantedProfile._id}`}>
          <MostWantedProfileMinorCard key={wantedProfile._id} wantedProfile={wantedProfile} />
        </Link>
      ))}
      {data && <Paginator totalPages={data?.totalPages} setCurrentPage={setCurrentPage} />}
    </div>
  );
};

export default ListMostWantedProfiles;
