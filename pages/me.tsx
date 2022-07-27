import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import Favorites from '../components/mepage/favorites/Favorites';
import { useAuthStore } from '../lib/store/zustand';

const Me = () => {
  const state = useAuthStore();

  return (
    <div>
      <Favorites />
    </div>
  );
};

export default Me;
