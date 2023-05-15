import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card" style={{ width: '100%' }}>
        <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
        <div className="card-body">
          <h5 className="card-title">{item.nombre} {item.modelo}</h5>
          <p className="card-text">Marca: {item.marca}</p>
          <p className="card-text">Precio: ${item.precio}</p>
          <p className="card-text">Stock: {item.stock}</p>
          <Link className='nav-link' to={`/product/${item.id}`}><button className='btn btn-dark'> Ver Producto </button></Link>
        </div>
      </div>
    </div>
  );
}






/* import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    return (
        <div className="card" style={{ width: '100%' }}>
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <p className="card-text">Marca: {item.marca}</p>
                <p className="card-text">Precio: ${item.precio}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <Link className='nav-link' to={`/product/${item.id}`}><button className='btn btn-dark'> Ver Producto </button></Link>
            </div>
        </div>
    );
} */

 
