import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Categorias from './Categorias/Categorias';
import { BotonDarkMode } from './BotonDarkMode/BotonDarkMode';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const { darkMode } = useDarkModeContext();
    const navbarClass = darkMode ? 'navbar navbar-expand-lg navbar-dark bg-dark' : 'navbar navbar-expand-lg bg-light';

    return (
        <div>
            <header>
                <nav className={navbarClass}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}>
                            <img src="https://external-preview.redd.it/0lYLIHfqjUrYhqdizn9rYImMsmj4ydvn0PymDfFRdso.jpg?auto=webp&s=b367c93b16ab5e049f65d42daaa71595c0aa7333" alt="Logo" width="40" height="34" className="d-inline-block align-text-top" />
                            
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/"}><b>Inicio</b></Link>
                                </li>                               
                                <Categorias />
                            </ul>                           
                            <BotonDarkMode/>
                            <CartWidget cantCarrito={1} />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;
