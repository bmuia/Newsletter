import React, { useState } from 'react';
import "./Newsletter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Newsletter() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [openForm, setOpenForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@company.com")) {
      setErrorMessage("Valid email required");
      return;
    }
    setErrorMessage("");
    setSuccessMessage(true);
    setOpenForm(false);
  };

  return (
    <div>
      <main>
        {openForm && (
          <div className="box">
            <div className="right-side">
              <div className="content">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d6543d" }} />
                    Product discovery and building what matters
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d6543d" }} />
                    Measuring to ensure updates are a success
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d6543d" }} />
                    And much more!
                  </li>
                </ul>
                <form onSubmit={handleSubmit}>
                  <div className="err">
                    <label htmlFor="email">Email address</label>
                    {errorMessage && <h6 className="col">{errorMessage}</h6>}
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={errorMessage ? "error" : ""}
                  />
                  <button type="submit">Subscribe to monthly newsletter</button>
                </form>
              </div>
            </div>
            <div className="left-side">
              <img src="/images/illustration-sign-up-desktop.svg" alt="" />
            </div>
          </div>
        )}
        {successMessage && 
          <div className="success-message">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d6543d" }} />
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription</p>
            <div className='home-btn'>
              <button onClick={() => {
                setOpenForm(true)
                setSuccessMessage(false)
              }}>Dismiss message</button>
            </div>
          </div>
        }
      </main>
    </div>
  );
}

export default Newsletter;
