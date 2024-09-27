import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const titleText = 'Contact.';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    emailjs
      .sendForm(
        'service_1dtzp12',
        'template_feg2c2x',
        form.current,
        'VHk0I2RXyGiXpRPb7'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSubmitMessage('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitMessage('Failed to send message. Please try again.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Steven Pelletier - Front-End & WordPress Developer',
    description:
      'Get in touch with Steven Pelletier, an experienced front-end and WordPress developer based in Orlando, FL. Available for web development projects, consultations, and collaborations.',
    url: 'https://stevendpelletier.com/contact',
    mainEntity: {
      '@type': 'Person',
      name: 'Steven Pelletier',
      jobTitle: 'Senior Web Developer',
      description:
        'Front-end developer and WordPress expert with over a decade of experience in creating responsive and user-friendly websites.',
      email: 'steve.d.pelletier@gmail.com',
      url: 'https://stevendpelletier.com',
      sameAs: [
        'https://www.linkedin.com/in/stevendpelletier',
        'https://www.instagram.com/steverino__/',
        'https://github.com/stevenpelletier90',
      ],
    },
  };

  return (
    <>
      <Helmet>
        <title>Steve Pelletier &bull; Contact</title>
        <meta
          name='description'
          content='Contact Steve Pelletier, a skilled front-end and WordPress developer in Orlando, FL. Get in touch for web development projects, WordPress solutions, or consultations on responsive design and user experience.'
        />
        <meta
          name='keywords'
          content='Steve Pelletier, contact, front-end developer, WordPress expert, web development, Orlando FL, responsive design, user experience, React developer, CSS specialist'
        />
        <link rel='canonical' href='https://stevendpelletier.com/contact' />

        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://stevendpelletier.com/contact'
        />
        <meta
          property='og:title'
          content='Contact Steven Pelletier | Front-End & WordPress Developer in Orlando, FL'
        />
        <meta
          property='og:description'
          content='Reach out to Steve Pelletier for expert web development services. Specializing in front-end development, WordPress, and responsive design in Orlando, FL.'
        />
        <meta
          property='og:image'
          content='https://stevendpelletier.com/og-image.jpg'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://stevendpelletier.com/contact'
        />
        <meta
          property='twitter:title'
          content='Contact Steven Pelletier | Front-End & WordPress Developer in Orlando, FL'
        />
        <meta
          property='twitter:description'
          content='Get in touch with Steven Pelletier for top-notch web development services. Expert in front-end, WordPress, and responsive design in Orlando, FL.'
        />
        <meta
          property='twitter:image'
          content='https://stevendpelletier.com/twitter-image.jpg'
        />

        <script type='application/ld+json'>
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className={styles.contact}>
        <div className={styles.hero}>
          <h1 className={styles.title}>{titleText}</h1>
        </div>
        <div className={styles.content}>
          <p className={styles.intro}>
            I&apos;m always excited to discuss new web development projects,
            WordPress solutions, or answer any questions about front-end
            development and design. Feel free to reach out!
          </p>
          <div className={styles.formWrapper}>
            <form
              ref={form}
              className={styles.contactForm}
              onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor='from_name'>Name</label>
                <input
                  type='text'
                  id='from_name'
                  name='from_name'
                  required
                  aria-required='true'
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='from_email'>Email</label>
                <input
                  type='email'
                  id='from_email'
                  name='from_email'
                  required
                  aria-required='true'
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='from_phone'>Phone</label>
                <input
                  type='tel'
                  id='from_phone'
                  name='from_phone'
                  aria-required='false'
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  rows='5'
                  required
                  aria-required='true'></textarea>
              </div>
              <button
                type='submit'
                className={styles.submitButton}
                disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Email'}
              </button>
              {submitMessage && (
                <p className={styles.submitMessage}>{submitMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
