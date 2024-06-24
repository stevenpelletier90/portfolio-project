import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'animate.css';
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
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

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
      <div className={`contact-header ${animated ? 'animate__animated animate__fadeIn' : ''}`}>
        <div className='contact-info'>
          <h1>contact.</h1>
          <p>Get in touch with me via social media or email.</p>
          <div className='social-media'>
            <a href='#' className='twitter'>
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
            <a href='#' className='facebook'>
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </a>
            <a href='#' className='linkedin'>
              <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
            </a>
            <a href='#' className='instagram'>
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </div>
        </div>
        <div className='contact-image'>
          {/* Replace with your actual image */}
          <img src='/path/to/your/image.jpg' alt='Contact' />
        </div>
      </div>

      <div className='contact-form'>
        <h2>Send me an email</h2>
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
          <button type='submit'>Send email</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
