import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

const fs = require('fs');

export default function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id },
      });
      // if (!fs.existsSync(response.data.thumbnail_url)) {
      //   //response.data.thumbnail_url =
      //`http://localhost:3333/files/${this.thumbnail}`;
      // }

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  return (
    <>
      <ul className='spot-list'>
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R${spot.price}/dia` : 'GRATUITO'}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
