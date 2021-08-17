import React from 'react';
import './button.css';

export const Button = ({
  onClick = () => {},
  type,
  children,
  btnType,
  disabled,
}) => {
  const buttonStyle = [
    'button',
    btnType === 'primary'
      ? 'primary'
      : btnType === 'secondary'
      ? 'secondary'
      : btnType === 'disabled'
      ? 'disabled'
      : '',
  ]
    .join(' ')
    .trim();

  return (
    <>
      <button
        className={buttonStyle}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};
