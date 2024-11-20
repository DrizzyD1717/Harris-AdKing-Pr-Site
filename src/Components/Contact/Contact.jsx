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
        <a href="">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Contact;
