import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import styles from "../../styles/Contact.module.css";
import "react-toastify/dist/ReactToastify.css";
import emailIcon from "../../../assets/contact/emailIcon.png";
import githubIcon from "../../../assets/contact/githubIcon.png";
import linkedinIcon from "../../../assets/contact/linkedinIcon.png";

function validateName(name: string): string | null {
  name = name.trim();
  if (!name) return "Please provide your name";
  if (name.length > 20) return "Name must not exceed 20 characters";
  if (!/^[a-zA-Z][a-zA-Z ]*$/.test(name))
    return "Name must only contain letters and spaces (not starting with a space)";
  return null;
}

function validateEmail(email: string): string | null {
  email = email.trim();
  if (!email) return "Please provide an email";
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return "Invalid Email";
  }
  return null;
}

function validateMessage(message: string): string | null {
  message = message.trim();
  if (!message) return "Message is required.";
  if (message.length > 200) return "Message must not exceed 200 characters";
  return null;
}

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const error = validateName(e.target.value);
    setNameError(error);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const error = validateEmail(e.target.value);
    setEmailError(error);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const error = validateMessage(e.target.value);
    setMessageError(error);
  };

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

    if (nameValidation || emailValidation || messageValidation) return;

    emailjs
      .sendForm(
        "service_awk5k0q",
        "template_nd1md2q",
        form.current,
        "zBWVbg4-chk-L_9Tm"
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
          onChange={handleNameChange}
        />
        {nameError && <p className={styles.error}>{nameError}</p>}

        <label>Email</label>
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        {emailError && <p className={styles.error}>{emailError}</p>}

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleMessageChange}
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