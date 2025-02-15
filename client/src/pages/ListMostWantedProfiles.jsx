// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PuffLoader from 'react-spinners/PuffLoader';
import useFetchMostWantedProfiles from '../hooks/useFetchMostWantedProfiles';
import HttpClient from '../config/httpClient';
import MostWantedProfileMinorCard from '../components/MostWantedProfileMinorCard';
import Paginator from '../components/Paginator';
import StyledListWantedProfiles from '../styled/pages/ListMostWantedProfiles';
import Search from '../components/Search';
import FilterBy from '../components/FilterBy';
import ResetAllParams from '../components/ResetAllParams';

const ListMostWantedProfiles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [hairFilterValue, setHairFilterValue] = useState('');
  const [eyeFilterValue, setEyeFilterValue] = useState('');

  const { 
    data, 
    isLoading } = useFetchMostWantedProfiles(
      HttpClient.baseURL,
      searchValue,
      hairFilterValue,
      eyeFilterValue,
      currentPage,
      HttpClient.itemsPerPage
  );

  return (
    <>
      <Search setSearchValue={setSearchValue}>
        <FilterBy
          setHairFilterValue={setHairFilterValue}
          hairFilterValue={hairFilterValue}
          setEyeFilterValue={setEyeFilterValue}
          eyeFilterValue={eyeFilterValue}
        />
        <ResetAllParams 
          setSearchValue={setSearchValue}
          setHairFilterValue={setHairFilterValue}
          setEyeFilterValue={setEyeFilterValue}
        />
      </Search>
      <StyledListWantedProfiles>
        {isLoading && (<PuffLoader color='cyan' size={150} />)}
        {!isLoading && data && data.wantedProfiles?.length === 0 && (<div>Currently, there are no wanted profiles. Please check back later</div>)}
        {!isLoading && data && data.wantedProfiles?.map((wantedProfile) => (
          <Link key={wantedProfile._id} to={`/wanted_profiles/${wantedProfile._id}`}>
            <MostWantedProfileMinorCard key={wantedProfile._id} wantedProfile={wantedProfile} />
          </Link>
        ))}
      </StyledListWantedProfiles>
      {data && <Paginator totalPages={data?.totalPages} setCurrentPage={setCurrentPage} />}
    </>
  );
};

export default ListMostWantedProfiles;
