import React from 'react';
import Message from './Message';

//Hay que enlazar products cuando se arme la BD, es un modelo

function Catalogue({products}) {

  return (
    <div className="Catalogue">
    {products && products.map(p =>
        <ProductCard
        name = {p.name}
        asessment = {p.asessment}
        price = {p.price}
        pictures = {p.pictures}
        />)}
    </div>
  );
}

export default Catalogue;
