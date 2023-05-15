import { useCarritoContext } from "../../context/CartContext";


const ItemCart = ({ item }) => {
    const { removeItem } = useCarritoContext()

    return (
        <div className="card mb-4 cardCart">
            <div className="row g-0">
                <div className="col-md-4">

                    <img src={item.img} alt={`Imagen de ${item.nombre}`} className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre} {item.modelo} </h5>
                        <p className="card-text">Cantidad: {item.quantity}</p>
                        <p className="card-text">Precio Unitario: $ {item.precio}</p>
                        <p className="card-text">Subtotal ${item.precio * item.quantity}</p>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>🗑️</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;
