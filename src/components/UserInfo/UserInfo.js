import React from 'react';
import './user-info.css';

export const UserInfo = ({ fullName, email }) => {
  return (
      <div className='user-info-container'>
        <p className='user-info-name'>{fullName}</p>
        <p className='user-info-email'>{email}</p>
      </div>
  );
};
