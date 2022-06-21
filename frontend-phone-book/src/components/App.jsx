import React from 'react';
import { ToastContainer } from 'react-toastify';

import Header from './Header';
import ContactList from './ContactList';

const App = () => {
  return (
    <>
      <Header />
      <ContactList />
      <ToastContainer />
    </>
  );
}

export default App;
