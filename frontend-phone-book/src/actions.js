import axios from "axios";

// Get contacts method
export const getContacts = () => {
  axios({
    method: "GET",
    url:"/contacts/",
  })
    .then((response)=>{
      const data = response.data;
      console.log('contacts', data);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
};

// Add contact method
export const addContact = (payload) => {
  axios({
    method: "POST",
    url:"/contact/",
    data:{
      name: payload.name,
      phone_number: payload.phone_number,
      email: payload.email
    }
  })
    .then((_response) => {
      getContacts();
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
};

// Edit contact method
export const editContact = (payload, id) => {
  axios({
    method: "POST",
    url:`/contact/edit/${id}/`,
  })
    .then((_response) => {
      getContacts();
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
};

// Delete contact method
export const deleteContact = (payload, id) => {
  axios({
    method: "DELETE",
    url:`/contact/delete/${id}/`,
  })
    .then((_response) => {
      getContacts();
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
};