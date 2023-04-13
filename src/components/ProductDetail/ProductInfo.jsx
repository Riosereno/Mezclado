import axios from 'axios';
import React from 'react';
import { useLocation, useParams } from 'react-router';

const getPokemonById = async (id) => {
  try {
    const res = await axios.get(``);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const ProductInfo = () => {
  const { id } = useParams();
  const { product } = useLocation();
  console.log({ product});

  return (
    <div className={id}>
      
      <h1>Product Detail</h1>
      <p>El producto seleccionado es: {id}</p>
    </div>
  );
};

export default ProductInfo;