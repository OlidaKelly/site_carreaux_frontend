import logo from '../../assets/logo_official.png';
import { Link } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsFilePerson } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { GiFertilizerBag, GiDividedSquare } from 'react-icons/gi';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img src={logo} alt="Accueil" className="logo" />
      </Link>
      <ul className="menu">
        <Link to="/fertilizers">
          <li>
            <GiFertilizerBag className="nav-icon" />
            <span className="nav-text">Nos engrais</span>
          </li>
        </Link>
        <Link to="/tiles">
          <li>
            <GiDividedSquare className="nav-icon" />
            <span className="nav-text">Nos carreaux</span>
          </li>
        </Link>
        <Link to="/" className={`mobile`}>
          <li>
            <GoHome className="nav-icon" />
            <span className="nav-text">Accueil</span>
          </li>
        </Link>
        <Link to="/about">
          <li>
            <BsFilePerson className="nav-icon" />
            <span className="nav-text">A Propos</span>
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <AiOutlinePhone className="nav-icon" />
            <span className="nav-text">Contact</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
