import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import styles from "../../styles/Contact.module.css";
import 'react-toastify/dist/ReactToastify.css';
import emailIcon from '../../../assets/contact/emailIcon.png';
import githubIcon from '../../../assets/contact/githubIcon.png';
import linkedinIcon from '../../../assets/contact/linkedinIcon.png';

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(name)) {
      toast.error("Name must contain only letters and spaces.");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      toast.error("Message must be at least 10 characters long.");
      return;
    }

    emailjs
      .sendForm('service_awk5k0q', 'template_nd1md2q', form.current, 'zBWVbg4-chk-L_9Tm')
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          toast.error('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <footer id="contact" className={styles.footer}>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to Connect</p>
      </div>

      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Message"
          required
        />
        <input className={styles.submit} type="submit" value="Send" />
      </form>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:Sakshi.shah@simformsolutions.com">Sakshi.shah@simformsolutions.com</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/Sakshi-Simform">github.com/Sakshi-simform</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="Linkedin icon" />
          <a href="https://www.linkedin.com/in/sakshi-shah">linkedin.com/in/sakshi-shah</a>
        </li>
      </ul>
    </footer>
  );
};