import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const idGenerator = () => {
    return Math.floor(Math.random() * 10000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {
      const newFormData = {
        id: idGenerator(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
      };

      setSubmittedData(newFormData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } else console.log("Please fill the inputs");
  };
  console.log(submittedData);
  return (
    <>
      <h1>Contact us!</h1>
      <p>
        Got a question? We'd love to hear from you. Send us a message and we'll
        respond as soon as possible!
      </p>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="name-area">
            <label>
              First name:
              <input
                type="text"
                placeholder="Your first name..."
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </label>
            <label>
              Last name:
              <input
                type="text"
                placeholder="Your last name..."
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </label>
          </div>
          <div>
            <label id="email-input">
              Email:
              <input
                type="email"
                placeholder="Your email..."
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </label>
          </div>
          <div>
            <label id="message-input">
              Message:
              <textarea
                name=""
                id="textarea"
                cols="30"
                rows="10"
                type="text"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
            </label>
          </div>
          <div className="button-div">
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
