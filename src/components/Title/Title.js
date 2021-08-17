import React from 'react';
import './title.css';

export const Title = ({ children }) => {
  return (
    <div className='title-container'>
      <h1 className='title'>{children}</h1>
    </div>
  );
};
