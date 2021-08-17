import React from 'react';
import './user-image.css';

export const UserImage = ({ url, alt }) => {
  return (
    <div className='user-image-container'>
      <img src={url} alt={alt} className='user-image' />
    </div>
  );
};
