import { useState } from "react";
import emailjs from "emailjs-com";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Contact.scss";

function Contact() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = `${import.meta.env.VITE_EMAILJS_USER_ID}`;
    const templateId = `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`;
    const serviceId = `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`;

    const templateParams = {
      email,
      firstName,
      lastName,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.info("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <section className="contact">
      <NavBar />
      <form className="form_contact" onSubmit={handleSubmit}>
        <div className="container_label">
          <label className="text_label_contact" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="container_label">
          <label className="text_label_contact" htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="container_label">
          <label className="text_label_contact" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="container_label">
          <label className="text_label_contact" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button className="btn_contact" type="submit">
          Send Message
        </button>
      </form>
      <Footer />
    </section>
  );
}

export default Contact;
