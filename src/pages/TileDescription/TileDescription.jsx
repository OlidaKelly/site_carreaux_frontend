import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button/Button';
import './TileDescription.css';

const TileDescription = () => {
  const [dataProduct, setDataProduct] = useState([]);
  // const [dataCategory, setDataCategory] = useState();

  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then(({ data }) => setDataProduct(data));

  }, []);

  return <div className="TileDescription">
    <h2>{dataProduct.name}</h2>
    <div className="TileDescription-contailer">
      <img src={dataProduct.image} alt={dataProduct.name} />
        <div className="items-TileDescription">
          <span className="tag">{dataProduct.type}</span>
          <p className="description">
            {dataProduct.description}
          </p>
          <p>Réference : {dataProduct.reference}</p>
          <p>Couleur : {dataProduct.color}</p>
          <p>Support de destination : {dataProduct.destination}</p>
          <p className="size">Largeur : {dataProduct.size}</p>
          <p className="tickness">Epaisseur : {dataProduct.tickness}</p>
        <Link to={`/contact`} >
          <Button className="button-contact" text={"Voir la disponibilité"}/>  
        </Link>
        </div>
    </div>
  </div>
}

export default TileDescription;