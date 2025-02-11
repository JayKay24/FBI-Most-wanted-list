// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ListMostWantedProfiles from './pages/ListMostWantedProfiles';
import DisplayMostWantedProfile from './pages/DisplayMostWantedProfile';
import StyledNav from './styled/components/Navigation';
import StyledContainer from './styled/components/Container';
import StyledMain from './styled/components/Main';

function App() {
  return (
    <StyledContainer>
      <StyledNav>
        <h2>
          <Link to='/'>Home</Link>
        </h2>
      </StyledNav>
      <StyledMain>
        <Routes>
          <Route path='/' element={<ListMostWantedProfiles />} />
          <Route path='/wanted_profiles/:id' element={<DisplayMostWantedProfile />} />
        </Routes>
      </StyledMain>
    </StyledContainer>
  )
}

export default App
