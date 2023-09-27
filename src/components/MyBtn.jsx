import React from 'react'

export default function MyBtn({ buttonText, onClick}) {
  return (
    <button onClick={onClick}>
        {buttonText}
    </button>
  );
}
