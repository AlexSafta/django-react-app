import React from 'react';
import { ToastContainer } from 'react-toastify';

import Header from './Header';
import ContactList from './ContactList';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <ContactList />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
