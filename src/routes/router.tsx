import React from 'react';
import {Routes, Route} from 'react-router-dom';

// Pages
import {HomePage} from '../pages/homePage/HomePage';
import {SignUpPage} from '../pages/signUpPage/SignUpPage';
import {LoginPage} from '../pages/loginPage/LoginPage';
import {MapPage} from '../pages/mapPage/MapPage';
import {ProfilePage} from '../pages/profilePage/ProfilePage';
import {CharacterCreatePage} from '../pages/charcterCreatePage';

export const useRoutes = () =>
  // const rootRef = db.ref("Atarasov");
  (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route
        path="/characterCreatePage/:chatId"
        element={CharacterCreatePage}
      />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
