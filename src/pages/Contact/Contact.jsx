import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    emailjs.sendForm('service_1dtzp12', 'template_feg2c2x', e.target, '3rDTXArOdGuzPjBE5').then(
      () => {
        setMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      },
      (error) => {
        setError('Failed to send the message, please try again.');
        console.error('FAILED...', error.text);
      }
    );
  };

  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input type='tel' id='phone' name='phone' value={formData.phone} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' value={formData.message} onChange={handleChange} required></textarea>
        </div>
        {message && <p className='success-message'>{message}</p>}
        {error && <p className='error-message'>{error}</p>}
        <button type='submit'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
