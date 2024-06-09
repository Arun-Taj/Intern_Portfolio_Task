
import React,{ useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
import "./Navbar.css";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: '1',
      link: "home",
    },
    {
      id: '2',
      link: "about",
    },
    {
      id: '3',
      link: "projects",
    },
    {
      id: '4',
      link: "contact",
    },
  ];
  return (
    <>
      <div className="nav-container">
        <p> Tajpuriya</p>
        <ul className="nav-links">
          {links.map(({id,link}) => (
            <li key={id} className="nav-links-li">
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="bars" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="bar-menu">
            {links.map(({id,link}) => (
              <li key={id} className="bar-menu-li">
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth={true}
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
