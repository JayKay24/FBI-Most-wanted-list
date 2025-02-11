// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ListMostWantedProfiles from './pages/ListMostWantedProfiles';
import DisplayMostWantedProfile from './pages/DisplayMostWantedProfile';

function App() {
  return (
    <section>
      <nav>
        <h2>
          <Link to='/'>Home</Link>
        </h2>
      </nav>
      <hr />
      <main>
        <Routes>
          <Route path='/' element={<ListMostWantedProfiles />} />
          <Route path='/wanted_profiles/:id' element={<DisplayMostWantedProfile />} />
        </Routes>
      </main>
    </section>
  )
}

export default App
