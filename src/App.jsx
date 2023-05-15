import './App.css';
import 'react-toastify/dist/ReactToastify.css';
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Context
import { DarkModeProvider } from './context/DarkModeContext';
//Components
import  NavBar  from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailCountainer from './components/ItemDetailCountainer/ItemDetailCountainer';
import { Checkout } from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';
//Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
//Toastify
import { ToastContainer } from 'react-toastify';



//firebase
//import { createProducts } from './components/firebase/firebase';


const App = () => {
    //createProducts()
    return (
        <>
            <BrowserRouter>
                <DarkModeProvider>
                <NavBar/>
                <ToastContainer/>
                        <Routes>
                            <Route path='/' element={<ItemListContainer/>}/>                                             
                            <Route path='/category/:category' element={<ItemListContainer/>}/>                                             
                            <Route path='/product/:id' element={<ItemDetailCountainer/>}/>  
                            <Route path='/checkout' element={<Checkout/>}/>   
                            <Route path='/cart' element={<Cart/>}/>                                         
                        </Routes>

                </DarkModeProvider>
            </BrowserRouter> 
        </>
    );
}

export default App;
