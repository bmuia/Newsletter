import React from 'react'
import "./Newsletter.css"

function Newsletter() {
  return (
    <div>
      <main>
        <div className="box">
          <div className="right-side">
            <div className="content">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
            <form>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" placeholder='email@company.com' />
              <button>Subscribe to monthly newsletter</button>
            </form>
           </div>
          </div>
          <div className="left-side">
            <img src="/images/illustration-sign-up-desktop.svg" alt="" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Newsletter