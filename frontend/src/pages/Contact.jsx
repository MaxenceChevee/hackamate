import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Contact() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-restricted-syntax
    console.log("Message sent:", { email, firstName, lastName, message });
  };

  return (
    <section className="contact">
      <NavBar />
      <form
        onSubmit={handleSubmit}
        action="mailto:nelson.64@live.fr"
        method="post"
      >
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
      <Footer />
    </section>
  );
}

export default Contact;
