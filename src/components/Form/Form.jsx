import { useState } from 'react';
import axios from 'axios';
import './Form.css';


const Form = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message !== '' && email !== '' && firstname !== '' && lastname !== '') {
      axios.post('http://localhost:5000/contact', {
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message,
      });

    } else {
      alert('alert', 'Vos informations doivent être complètes', 5000);
    }
  };

  return (
  
    <div className="Contact">
      <form className="Form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Prenom"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nom de famille"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Votre Message ici"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input type="submit" className="button" value="Envoyer" />
      </form>
      {/* {reponse !== '' ? (
        <div className={`created ${reponseType}`}>{reponse}</div>
      ) : (
        ''
      )} */}
    </div>
  );
};

export default Form;