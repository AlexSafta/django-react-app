import React, { useCallback, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CopyIcon from '@mui/icons-material/CopyAllRounded';

import { successMessage, errorMessage } from '../util';
import ContactForm from './ContactForm';

import '../css/ContactItem.css';

const ContactItem = ({ contact, onEdit, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCopy = useCallback(async () => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(contact.phone_number);
      successMessage('Phone number successfully copied to clipboard!');
    } else {
      errorMessage('Copy action not available...');
    }
  }, [contact.phone_number]);

  const handleEdit = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <div className='contactItem'>
      <div className='contactDetails'>
        <div className='contactHeader'>
          <p className='contactName'>{contact.name}</p>
          <p className='contactPhoneNumber'>{contact.phone_number}</p>
        </div>
        <p className='contactEmail'>{contact.email}</p>
      </div>
      <div className='contactButtons'>
        <IconButton onClick={handleCopy} aria-label="copy">
          <CopyIcon />
        </IconButton>
        <IconButton onClick={handleEdit} aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(contact.id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>
      {expanded && <ContactForm 
        defaultValue={{
          name: contact.name,
          phoneNumber: contact.phone_number,
          email: contact.email
        }}
        onSubmit={(data) => onEdit(data, contact.id)}
        addForm={false}
      />}
    </div>
  );
};

export default ContactItem;