// Callback.tsx
import React, { useEffect } from 'react';

const Callback: React.FC = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash.substr(1));
    const accessToken = urlParams.get('access_token');
    localStorage.setItem('accessToken', accessToken || '');

    // Redirect to a page to display user data or perform further actions
    // window.location.href = '/user'; // Replace with the actual route for displaying user data
  }, []);

  return <></>;
};

export default Callback;
