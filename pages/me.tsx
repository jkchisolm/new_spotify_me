import React from 'react';
import Favorites from '../components/mepage/favorites/Favorites';
import { useAuthStore } from '../lib/store/zustand';

const Me = () => {
  return (
    <div>
      <Favorites />
    </div>
  );
};

export default Me;
