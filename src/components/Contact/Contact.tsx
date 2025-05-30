import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { validateEmail, validateMessage, validateName } from "../../utils/validation";
import styles from "../../styles/Contact.module.css";
import "react-toastify/dist/ReactToastify.css";
import emailIcon from "../../../assets/contact/emailIcon.png";
import githubIcon from "../../../assets/contact/githubIcon.png";
import linkedinIcon from "../../../assets/contact/linkedinIcon.png";

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!form.current) return;
  
    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();
  
    const nameValidation = validateName(name);
    const emailValidation = validateEmail(email);
    const messageValidation = validateMessage(message);
  
    setNameError(nameValidation);
    setEmailError(emailValidation);
    setMessageError(messageValidation);
  
    const validation = nameValidation || emailValidation || messageValidation;
  
    if (validation) return;
  
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAILJS_USER_ID
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current?.reset();
        setNameError(null);
        setEmailError(null);
        setMessageError(null);
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        toast.error("Failed to send message. Please try again later.");
      });
  };

  return (
    <footer id="contact" className={styles.footer}>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to Connect</p>
      </div>

      <form className={styles.form} ref={form} onSubmit={sendEmail} noValidate>
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          onChange={(e) => setNameError(validateName(e.target.value))}
        />
        {nameError && <p className={styles.error}>{nameError}</p>}

        <label>Email</label>
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          onChange={(e) => setEmailError(validateEmail(e.target.value))}
        />
        {emailError && <p className={styles.error}>{emailError}</p>}

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Message"
          onChange={(e) => setMessageError(validateMessage(e.target.value))}
        />
        {messageError && <p className={styles.error}>{messageError}</p>}

        <input className={styles.submit} type="submit" value="Send" />
      </form>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:Sakshi.shah@simformsolutions.com">
            Sakshi.shah@simformsolutions.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/Sakshi-Simform">github.com/Sakshi-Simform</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="Linkedin icon" />
          <a href="https://www.linkedin.com/in/sakshi-shah">
            linkedin.com/in/sakshi-shah
          </a>
        </li>
      </ul>
    </footer>
  );
};