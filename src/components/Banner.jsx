import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/portfolio.jpg" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Gulbarshyn Valikhan</h6>
            <h3>Digital management and Design</h3>
            <p>
              I am Gulbarshyn Valikhan Kuanyshovna, born on November 28 in Almaty. I wasn't interested in programming
              until 11th grade and didn't think it would be that difficult. When I was finishing 11th grade, I heard
              that a boy was studying and working in the IT field. He explained it deeply. That's why I chose the IT
              field. I will study these languages after entering Narxoz University..

            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
            <a className="btn" href="resume.pdf" target="_blank" rel="noopener noreferrer">
               Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
