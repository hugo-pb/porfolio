import React from 'react'

export default function Contact() {
  return (
    <div className="container" id="Contact">
      <form data-netlify="true" netlify>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="Message" className="form-label">
            Message
          </label>
          <input type="message" className="form-control" />
        </div>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
