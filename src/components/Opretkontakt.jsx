import React from 'react'
import { useState } from 'react';
import ReactModal from 'react-modal'
import MyBtn from './MyBtn';
import "../components/modal.css"


export default function Opretkontakt({ isOpen, setIsOpen }) {

    function handleCloseModal() {
        setIsOpen(false);
};


  return (
    <div>
        <ReactModal isOpen={isOpen}>
        <MyBtn buttonText={"Luk"} onClick={handleCloseModal}/>
          <div className='modal'>
            <input type="text" placeholder='Fornavn' />
            <input type="text" placeholder='Efternavn' />
            <input type="text" placeholder='Email-adresse'/>
            <input type="text" placeholder='Tlf nummer'/>
            <input type="text" placeholder='Firma' />
            <input type="text" placeholder='Stilling' />
            <MyBtn buttonText={"Opret kontakt"}/>
            </div>
        </ReactModal>

    </div>
  );
}
