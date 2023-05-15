import React from 'react';
import { useCarritoContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
        <button className='btn'>
        <Link to={"/cart"} className='nav-link'>
            <i className='fas fa-shopping-cart fa-lg'>🛒</i>
            {getItemQuantity() > 0 && <span className='cantCarrito'> {getItemQuantity()} </span>}
        </Link>
        </button>
        </>
    )
}

export default CartWidget;
