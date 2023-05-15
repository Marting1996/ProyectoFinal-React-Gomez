import React from 'react';
import { Item } from '../Item/Item';
import ItemCart from '../ItemCart/ItemCart';

const ItemList = ({productos, plantilla}) => {
    return (
        <>
            {
                plantilla === "item" ? productos.map(producto => <Item key={producto.id} item={producto} /> ) 
                : productos.map(producto => <ItemCart key={producto.id} item={producto} /> )
            }
            
        </>
    );
}

export default ItemList;
