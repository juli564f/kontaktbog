import React from 'react'
import { useState } from 'react';
import ReactModal from 'react-modal'
import MyBtn from './MyBtn';
import { Contact } from '../entities/contact';
import "./opretkontakt.css"

//Modtager props
export default function Opretkontakt({ isOpen, setIsOpen, setContacts, contacts}) {

  const [ formValues, setFormValues ] = useState(new Contact('','','','','',''));

  function handleUpdateFormValues(event) {
    console.log(formValues);
    const name = event.target.name;
    const value = event.target.value;
    const result = { ...formValues, [name]: value };
    setFormValues(result);
  }

// //Deklarerer state variabler med en tom "string", setFirstname osv. er en funktion som kan bruges til at ændre state
  const [touchedContact, setTouchedContact] = useState(false);

  //funktion til at tilføje ny kontakt
  const handleAddContactClick = () =>{
    //Renderer et nyt objekt til array
    if(isValid){
      // const newContact = new Contact(firstname, lastname, email, phone, company, position);
      const newContact = new Contact(
        formValues.firstname,
        formValues.lastname,
        formValues.email,
        formValues.phone,
        formValues.company,
        formValues.position,
      );
        //   //Opdaterer array med ny kontakt som indeholder firstnamt, lastname
        postContact(newContact);

      //   //Tømmer input felterne efter click
        setFormValues(new Contact('','','','','',''))
      handleCloseModal();
    } else {
      setTouchedContact(true);
    }
};

      //Funktion til at checke om input felterne er fyldt ud
      let isValid = formValues.firstname.trim() !== '';


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

  const postContact = async (newContact) => {
    const tableName = "kontaktbog";
    const projectUrl = "https://aebosyspfyekoolamwcn.supabase.co"
    const data = await fetch(projectUrl + '/rest/v1/' + tableName, {
      method: "POST",
      body: JSON.stringify(newContact),
      headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlYm9zeXNwZnlla29vbGFtd2NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyODA0NTAsImV4cCI6MjAxNDg1NjQ1MH0.Y4EYDEYI47o7OJryrOkk3a0NztUz2RfolOES4cN3Ytc',
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      }
    }).then(result => result.json())
    .then(createdContact => {
      const contactFromSupabase = createdContact[0];
      setContacts([...contacts, contactFromSupabase]);

      console.log(createdContact);
    })
  }

  return (
    <div>
        <ReactModal isOpen={isOpen} style={customStyles}>
          <div className="modal">
            <div className="closeBtn">
              <MyBtn buttonText={"Close"} onClick={handleCloseModal}/>
            </div>
                <input type="text" name='firstname' value={formValues.firstname} onChange={handleUpdateFormValues} placeholder='Firstname' 
                onBlur={() => setTouchedContact(true)}/>
                <input type="text" name='lastname' value={formValues.lastname} onChange={handleUpdateFormValues} placeholder='Lastname' 
                onBlur={() => setTouchedContact(true)}/>
                <input type="text" name='email' value={formValues.email} onChange={handleUpdateFormValues} placeholder='Email-address'
                onBlur={() => setTouchedContact(true)}/>
                <input type="text" name='phone' value={formValues.phone} onChange={handleUpdateFormValues} placeholder='Phone'
                onBlur={() => setTouchedContact(true)}/>
                <input type="text" name='company' value={formValues.company} onChange={handleUpdateFormValues} placeholder='Company' 
                onBlur={() => setTouchedContact(true)}/>
                <input type="text" name='position' value={formValues.position} onChange={handleUpdateFormValues} placeholder='Position'           
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
