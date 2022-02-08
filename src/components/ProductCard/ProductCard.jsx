// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Button from '../Button/Button';
import Services from '../../services/services';
import './ProductCard.css';

const ProductCard = ({ datas }) => {


  return (
    <div className="ProductCard">
      <img className="img-product-card" src={datas.image} alt={datas.name} />
      <div className="product-infos-container">
        <h3>{datas.name}</h3>
        <p className="description">
          {Services.strLimit(datas.description, 60)}
          <br />
          <Link to={`/tiles/${datas.id}`} className="seeMore">
            Afficher plus [...]
          </Link>
        </p>
        <div className="items-product-card">
          <p className="size">{datas.size}</p>
          <p className="tickness">{datas.tickness}</p>
        </div>
          <Link to={`/contact`} >
            <Button className="button-contact" text={"Voir la disponibilité"}/>  
          </Link>
      </div>
    </div>
  );
};

export default ProductCard;
