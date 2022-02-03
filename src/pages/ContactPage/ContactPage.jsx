import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import axios from 'axios';

import './ContactPage.css';

const ContactPage = () => {
  const [about, setAbout] = useState();

  useEffect(() => {
  axios.get('http://localhost:5001/about/1').then(({ data }) => {
    setAbout(data);
  });
  }, []);

  return (
    <div className="ContactPage">
      <h1>Nous contacter</h1>
      <div className="div-ContactPage-container">
        <div className="infos">
          <ul>
            <Link to={`tel:${about?.phone}`}>
              <li>
               <BsWhatsapp className='contact-icon'/>
                {about?.phone}
              </li>
            </Link>
            <li>
              <MdOutlineEmail className='contact-icon' />
              {about?.email}
            </li>
          </ul>
        </div>
      </div>
      <Form/>
    </div>
  );
}

export default ContactPage;