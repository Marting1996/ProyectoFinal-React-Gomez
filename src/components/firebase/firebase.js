import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDYT4lqwbQ2UqK08Xjw1GHGIiJepknNMMU",
  authDomain: "react-gomez.firebaseapp.com",
  projectId: "react-gomez",
  storageBucket: "react-gomez.appspot.com",
  messagingSenderId: "910732432623",
  appId: "1:910732432623:web:142bbaa3eaccc77087771a"
};

const app = initializeApp(firebaseConfig);

const bdd = getFirestore()

//CRUD

export const createProducts = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

export const getProducts = async () => {
    const prods = await getDocs (collection(bdd, "productos"))
    const items = prods.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}
export const getProduct = async (id) => {
    const prod = await getDoc(doc(bdd, "productos", id))
    const item = {...prod.data(), id: prod.id}
    return item
}

export const updateProduc = async(id, info) => {
    const estado = await updateDoc(doc(bdd, "productos", id), info)
}

export const deleteProduc = async (id) => {
    const estado = await deleteDoc(doc(bdd, "productos", id),)
    return estado
}

//CREATE Y READ de orden de compra

export const createOrdendeCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
} 



