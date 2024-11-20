import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <footer id="contact">
      <h2>Let's Talk</h2>
      <p>
        Interested in working together or have a question? Ready to elevate your
        nightlife experience? Reach out to me directly. Feel free to reach out.
      </p>
      <div className="links">
        <a href="mailto:egundeyiharris@gmail.com">
          <i class="fa-solid fa-envelope"></i>egundeyiharris@gmail.com
        </a>
        <a href="https://x.com/Harris_adking?t=gkCOnV5wbKJORru8UvuR0A&s=09">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/harris_adking?igsh=MTRzamZyeDAxejdzZQ==">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/harris-egundeyi-2b7487245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Contact;
