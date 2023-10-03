import React from 'react'
import { useState } from 'react';
import ReactModal from 'react-modal'
import MyBtn from './MyBtn';
import { Contact } from '../entities/contact';
import "./opretkontakt.css"

//Modtager props
export default function Opretkontakt({ isOpen, setIsOpen, setContacts, contacts}) {

//Deklarerer state variabler med en tom "string", setFirstname osv. er en funktion som kan bruges til at ændre state
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [touchedContact, setTouchedContact] = useState(false);

//Funktioner som holder øje med ændringerer i value attribut i input felt
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };
  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  //funktion til at tilføje ny kontakt
  const handleAddContactClick = () =>{
    //Renderer et nyt objekt til array
    if(isValid){
      const newContact = new Contact(firstname, lastname, email, phone, company, position);
        //   //Opdaterer array med ny kontakt som indeholder firstnamt, lastname
      setContacts([...contacts, newContact]);
      //   //Tømmer input felterne efter click
      setFirstname(''); 
      setLastname('');
      setEmail('');
      setPhone('');
      setCompany('');
      setPosition('');
      handleCloseModal();
    } else {
      setTouchedContact(true);
    }
};
//Funktion til at checke om input felterne er fyldt ud
  let isValid = firstname.trim() !== '' &&
  lastname.trim() !== '' &&
  email.trim() !== '' &&
  phone.trim() !== '' &&
  company.trim() !== '' &&
  position.trim() !== '';


//Funktion som håndterer lukning af modal på click.
  function handleCloseModal() {
        setIsOpen(false);
  }
  

//Modal style
  const customStyles = {
    content: {
      top: '10%',
      left: '10%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '80%',
      height: '80%',
      }
  };

  return (
    <div>
        <ReactModal isOpen={isOpen} style={customStyles}>
          <div className="modal">
            <div className="closeBtn">
              <MyBtn buttonText={"Close"} onClick={handleCloseModal}/>
            </div>
                <input type="text" value={firstname} onChange={handleFirstnameChange} placeholder='Firstname' 
                onBlur={() => setTouchedContact(true)}/>
                <input type="text" value={lastname} onChange={handleLastnameChange} placeholder='Lastname' 
                onBlur={() => setTouchedContact(true)}/>
                <input type="text" value={email} onChange={handleEmailChange} placeholder='Email-address'
                onBlur={() => setTouchedContact(true)}/>
                <input type="text" value={phone} onChange={handlePhoneChange} placeholder='Phone'
                onBlur={() => setTouchedContact(true)}/>
                <input type="text" value={company} onChange={handleCompanyChange} placeholder='Company' 
                onBlur={() => setTouchedContact(true)}/>
                <input type="text" value={position} onChange={handlePositionChange} placeholder='Position'           
                onBlur={() => setTouchedContact(true)}/>
                { !isValid && touchedContact &&
          <div>
            {/* Besked som viser at felterne skal udfyldes */}
            Content cannot be empty. Please fill out the input.
          </div>
        }
              <MyBtn buttonText={"Create contact"} onClick={handleAddContactClick}/>
          </div>
        </ReactModal>
    </div>
  )
}
