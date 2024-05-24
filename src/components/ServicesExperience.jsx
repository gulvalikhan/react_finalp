import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-palette", // Пример иконки, можете выбрать другую из FontAwesome
      title: "Product Design",
      desc: "Product design involves creating and iterating on products that solve a user's problems or address a specific need in a market.",
      active: true, // Можно установить в false, если хотите, чтобы элемент был неактивным
    },
    {
      icon: "fab fa-react", // Font Awesome иконка для React
      title: "React",
      desc: "React is a JavaScript library for building user interfaces.",
      active: false,
    },
    {
      icon: "fa-pencil-ruler", // Пример иконки, можете выбрать другую из FontAwesome
      title: "Web Designer",
      desc: "A web designer is someone who prepares content for the Web.",
      active: true, // Можно установить в false, если хотите, чтобы элемент был неактивным
    },
    {
      icon: "fab fa-laravel", // Иконка для Laravel из FontAwesome
      title: "Laravel",
      desc: "Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern.",
      active: true, // Можно установить в false, если хотите, чтобы элемент был неактивным
    },
    {
      icon: "fab fa-python", // Иконка для Python из FontAwesome (предполагая, что Django написан на Python)
      title: "Django",
      desc: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      active: true, // Можно установить в false, если хотите, чтобы элемент был неактивным
    }


  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>70%</h3>
            <p>

              Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>0</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>0</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>0</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>0</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
