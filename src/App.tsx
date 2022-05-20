import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import { useCases } from './domain/auth';
import { authSelector } from './domain/auth/auth.slice';
import { AppDispatch } from './domain/store';

function App() {
  const { accessToken } = useSelector(authSelector )
  const dispatch = useDispatch<AppDispatch>()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const payload = {
      url: `${process.env.REACT_APP_SPOTIFY_URL}/authorize`,
      params: {
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID!,
        response_type: 'code',
        scope: 'user-read-private user-read-email',
        redirect_uri: `${process.env.REACT_APP_SPOTIFY_URL}/callback`,
        state: '',
      }
    }
    dispatch(useCases.authenticateUser(payload))
  }
  
  return (
    <div>
      { accessToken !== '' ? (
        <h2 data-testid="spotify-react-access-token">You are connected !</h2>
      ) : (
        <button
          onClick={e => handleClick(e)}
          data-testid="spotify-react-authenticate-user"
        >
          Connexion
        </button>
      ) }
    </div>
  );
}

export default App;
