import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";

import ContactItem from './ContactItem';
import ContactForm from './ContactForm';
import CircularProgress from '@mui/material/CircularProgress';

import { successMessage, errorMessage } from '../util';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getContacts = useCallback(() => {
    setLoading(true);
    axios({
        method: "GET",
        url:"/contacts/",
    })
      .then((response)=>{
        const data = response.data;
        setContacts(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
            errorMessage('Ups! Something went wrong!');
            setLoading(false);
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
      });
  }, []);

  const addContact = useCallback((contact) => {
    setLoading(true);
    axios({
      method: "POST",
      url:"/contact/",
      data:{
        name: contact.name,
        phone_number: contact.phone_number,
        email: contact.email
      }
    })
      .then((_response) => {
        successMessage('Contact added successfully!');
        getContacts();
      })
      .catch((error) => {
        if (error.response) {
          errorMessage('Ups! Something went wrong!');
          setLoading(false);
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }, [getContacts]);

  const editContact = useCallback((newData, id) => {
    setLoading(true);
    axios({
      method: "POST",
      url:`/contact/edit/${id}/`,
      data: {
        name: newData.name ?? '',
        phone_number: newData.phone_number ?? '',
        email: newData.email ?? '',
      }
    })
      .then((_response) => {
        successMessage('Contact updated successfully!');
        getContacts();
      })
      .catch((error) => {
        if (error.response) {
          errorMessage('Ups! Something went wrong!');
          setLoading(false);
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }, [getContacts]);

  const deleteContact = useCallback((id) => {
    setLoading(true);
    axios({
      method: "DELETE",
      url:`/contact/delete/${id}/`,
    })
      .then((_response) => {
        successMessage('Contact deleted successfully!');
        getContacts();
      })
      .catch((error) => {
        if (error.response) {
          errorMessage('Ups! Something went wrong!');
          setLoading(false);
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  },  [getContacts]);

  const handleEditContact = useCallback((newContact, id) => {
    editContact(newContact, id);
  }, [editContact]);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <>
      <ContactForm
        onSubmit={addContact}
        addForm={true}
      />
      <div className='contactList'>
      {
        loading ? 
        <CircularProgress style={{margin: '8px auto'}} size={24} color='secondary' /> : (
          contacts.map((contact, index) => 
            <ContactItem 
              key={index}
              contact={contact} 
              onEdit={handleEditContact} 
              onDelete={deleteContact} 
            />
          )
        )
      }
      </div>
    </>
  );
};

export default ContactList;