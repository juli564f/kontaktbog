import React from 'react'

//modtager props
export default function MyBtn({ buttonText, onClick }) {
  return (
    <button onClick={onClick}>
        {buttonText}
    </button>
  );
}
