
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS configuration constants
export const EMAILJS_SERVICE_ID = 'service_jcxis7h';
export const EMAILJS_TEMPLATE_ID = 'template_qssp16l';
export const EMAILJS_PUBLIC_KEY = 'JwroCxPuQ5WqTVuWk';

const EmailJSInit = () => {
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized with public key');
  }, []);
  
  return null;
};

export default EmailJSInit;
