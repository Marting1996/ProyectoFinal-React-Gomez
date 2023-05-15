import React from 'react';
import { useRef } from 'react';
import { useCarritoContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { createOrdendeCompra, getProduct, updateProduc } from '../firebase/firebase';
import { toast } from "react-toastify"

export const Checkout = () => {
  const datForm = useRef()
  const {carrito, totalPrice, emptyCart} = useCarritoContext()
  let navigate = useNavigate()

  const consultarForm = (e) => {
    e.preventDefault()
    const email = datForm.current.email.value;
    const email2 = datForm.current.email2.value;
    if (email !== email2) {
      alert('Los emails no coinciden');
      return;
    }

    const datosFormulario = new FormData(datForm.current)
    const cliente = Object.fromEntries(datosFormulario)

    const aux = [...carrito]
    aux.forEach(prodCarrito => {
      getProduct(prodCarrito.id).then(prodBDD => {
        if(prodBDD.stock >= prodCarrito.quantity) {
          prodBDD.stock -= prodCarrito.quantity
          updateProduc(prodCarrito.id, prodBDD)
        } else {
          console.log("Stock no valido");
          return;
        }
      })
    })
    const aux2 = aux.map(prod => ({id: prod.id, quantity: prod.quantity, precio: prod.precio}));
    
    createOrdendeCompra(cliente, totalPrice(), aux2, new Date().toLocaleString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })).then(ordenCompra => {
      toast.info(`Gracias por comprar, su ID de compra es ${ordenCompra.id} por un total de ${totalPrice()}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      emptyCart()
      e.target.reset()
      navigate("/")
    })
    .catch(error => {
      console.error(error)
    })
  }
  
  return (
    <>
      {carrito.length === 0 ? 
        <>
          <h2>Para finalizar la compra debe tener compras en el Carrito</h2>
          <Link className='nav-link' to={"/"}> <button className='btn btn-primary'>Continuar Comprando</button></Link>
        </> 
      :
      <div className='container divForm'>
      <form onSubmit={consultarForm} ref={datForm}>

        <div className='mb-3'>
        <label htmlFor="nombre" className='form-label'>Nombre y Apellido</label>
        <input type="text" placeholder="Nombre y Apellido" className='form-control' name='nombre' required />
        </div>
        <div className='mb-3'>
        <label htmlFor="dni" className='form-label'>DNI</label>
        <input type="number" placeholder="DNI" className='form-control' name='dni' required/>
        </div>
        <div className='mb-3'>
        <label htmlFor="telefono" className='form-label'>Telefono</label>
        <input type="number" placeholder="Telefono" className='form-control' name='telefono' required />
        </div>
        <div className='mb-3'>
        <label htmlFor='email' className='form-label'>Email</label>
        <input type='email' placeholder='Email' className='form-control' name='email' required />
        </div>
        <div className='mb-3'>
        <label htmlFor='email2' className='form-label'>Confirmar email</label>
        <input type='email' placeholder='Confirmar Email' className='form-control' name='email2' required />
        </div>
        <div className='mb-3'>
        <label htmlFor="direccion" className='form-label'>Dirección</label>
        <input type="text" placeholder="Dirección" className='form-control' name='direccion' required/>
        </div>

          <input type="submit" className='btn btn-dark' />
      </form>
  </div>
    }
    </>
  );
}