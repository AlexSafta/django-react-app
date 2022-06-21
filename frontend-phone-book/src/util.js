import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidPhoneNumber } from "react-phone-number-input";

export const successMessage = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const errorMessage = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const emailRegex = 
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validContactRules = {
  name: {
    required: {
      value: true,
      message: 'This field is required.',
    },
    maxLength: {
      value: 60,
      message: 'The name must have maximum 60 characters.',
    },
    minLength: {
      value: 3,
      message: 'Enter at least 3 characters.',
    },
  },
  phoneNumber: {
    required: {
      value: true,
      message: 'This field is required.',
    },
    validate: (value) => {
      let valid = isValidPhoneNumber(value);
      return valid ? null : 'Must be a valid phone number.';
    },
  },
  email: {
    maxLength: {
      value: 100,
      message: 'The email must have maximum 100 characters.',
    },
    pattern: {
      value: emailRegex,
      message: 'Must be a valid email address.'
    },
  },
};