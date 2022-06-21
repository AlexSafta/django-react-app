import React, { useCallback } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CopyIcon from '@mui/icons-material/CopyAllRounded';

import { successMessage, errorMessage } from '../util';

const ContactItem = ({ contact, onEdit, onDelete }) => {

  const handleCopy = useCallback(async () => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(contact.phone_number);
      successMessage('Phone number successfully copied to clipboard!');
    } else {
      errorMessage('Copy action not available...');
    }
  }, [contact.phone_number]);

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
        <IconButton onClick={() => onEdit(contact)} aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(contact.id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ContactItem;