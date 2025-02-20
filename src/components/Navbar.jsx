import {Link, NavLink} from 'react-router-dom';


export default function Navbar() {

    return (
            <nav className="navbar">
              <div className="nav-container">
                <Link className="nav-logo" to="/">Sami Harun</Link>
                <ul className="nav-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/cv">CV</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </nav>
          );
        }