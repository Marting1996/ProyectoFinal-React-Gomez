import { useCount } from "../../hooks/useCount"

export const ItemCount = ({ValInicial, min, max, onAdd}) =>{
   
    const {count, minus, sum, reset} = useCount(ValInicial, min, max, onAdd) 
    
    return(
        <div>
            <button className="btn btn-dark" onClick={ minus}>-</button>
            {count}
            <button className="btn btn-dark" onClick={ sum}>+</button>
            <button className="btn btn-dark" onClick={ reset}>Reset</button>
            <button className="btn btn-dark" onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}