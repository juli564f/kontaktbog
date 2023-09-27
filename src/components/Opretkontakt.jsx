import React from 'react'
import { useState } from 'react';
import ReactModal from 'react-modal'
import MyBtn from './MyBtn';


export default function Opretkontakt({isOpen, setIsOpen}) {

    function handleCloseModal() {
        setIsOpen(false);
};


  return (
    <div>
        <ReactModal isOpen={isOpen}>
            <MyBtn buttonText={"Luk"} onClick={handleCloseModal}/>
        </ReactModal>

    </div>
  );
}
