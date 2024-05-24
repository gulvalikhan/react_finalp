import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">-</span>
        <div className="links">
          <a href="https://www.linkedin.com/in/gulbarshyn-valikhan-a924a1257/" target={"blank"} title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/" target={"blank"} title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/gulvalikhan" target={"blank"} title="Github">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created Gulbarshyn Valikhan
        </p>
      </div>
    </footer>
  );
}

export default Footer;
