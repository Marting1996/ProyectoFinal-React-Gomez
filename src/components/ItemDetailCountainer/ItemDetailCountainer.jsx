import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProduct } from '../firebase/firebase';

const ItemDetailCountainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams()
    useEffect(() => {
        getProduct(id).then(prod => setItem(prod))
    },[])
    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={item} />
            
        </div>
    );
}

export default ItemDetailCountainer;