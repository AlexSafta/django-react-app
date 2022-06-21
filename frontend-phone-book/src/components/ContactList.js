import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";

import ContactItem from './ContactItem';
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
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }, [getContacts]);

  const editContact = useCallback((id) => {
    setLoading(true);
    axios({
      method: "POST",
      url:`/contact/edit/${id}/`,
    })
      .then((_response) => {
        successMessage('Contact updated successfully!');
        getContacts();
      })
      .catch((error) => {
        if (error.response) {
          errorMessage('Ups! Something went wrong!');
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }, [getContacts]);

  const handleEditContact = useCallback((contact) => {
    console.log(contact);
  }, []);

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
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  },  [getContacts]);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <div className='contactList'>
    {
      loading && <CircularProgress />
    }
    {
      contacts.map((contact, index) => 
        <ContactItem 
          contact={contact} 
          onEdit={handleEditContact} 
          onDelete={deleteContact} 
        />
      )
    }
    </div>
  );
};

export default ContactList;