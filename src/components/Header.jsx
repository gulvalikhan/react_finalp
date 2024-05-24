import React, { useState, useEffect, useContext } from "react";

// Create a context
const DataContext = React.createContext();

function Header() {
  const [stickyClass, setStickyClass] = useState("");
  const [active, setActive] = useState(false);
  const [data, setData] = useState(null); // State to store fetched data

  useEffect(() => {
    // Function to fetch data asynchronously
    const fetchData = async () => {
      try {
        const response = await fetch("https://aws.amazon.com/ru/what-is/api/#:~:text=APIs%20are%20mechanisms%20that%20enable,weather%20updates%20on%20your%20phone.");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => {

    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  return (
      <DataContext.Provider value={data}>
        <header className={`${stickyClass}`}>
          <div className="header-inner">
            <span className="logo">G</span>
            <div className="links">
              <a className="link" href="#banner">
                Home
              </a>
              <a className="link" href="#services">
                Sevices
              </a>
              <a className="link" href="#experiences">
                Experience
              </a>
              <a className="link" href="#projects">
                Projects
              </a>
            </div>
            <span className="menu" onClick={() => setActive(!active)}>
            <i className="fas fa-bars"></i>
          </span>
          </div>
          <div className={`mobile-links ${active ? "active" : ""}`}>
            <a className="link" onClick={() => setActive(!active)} href="#banner">
              Home
            </a>
            <a
                className="link"
                onClick={() => setActive(!active)}
                href="#services"
            >
              Sevices
            </a>
            <a
                className="link"
                onClick={() => setActive(!active)}
                href="#experiences"
            >
              Experience
            </a>
            <a
                className="link"
                onClick={() => setActive(!active)}
                href="#projects"
            >
              Projects
            </a>
          </div>
          {/* Display fetched data */}
          <DisplayData />
        </header>
      </DataContext.Provider>
  );
}

// Define a new component to consume the context
function DisplayData() {
  const data = useContext(DataContext);

  return (
      <div>
        {data && (
            <div>
              <h2>Data from API:</h2>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        )}
      </div>
  );
}

export default Header;
