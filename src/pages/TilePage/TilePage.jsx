import ProductCard from './../../components/ProductCard/ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './TilePage.css';

const TileCard = () => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/products')
      .then(({ data }) => setDataProduct(data));
  }, []);

  return (
    <div className="TileCard-page">
      <h1>Nos carreaux</h1>
      <div className="div-TileCard">
        {dataProduct?.map((product) => (
          <ProductCard key={product.id} datas={product} />
        ))}
      </div>
    </div>
  );
};

export default TileCard;