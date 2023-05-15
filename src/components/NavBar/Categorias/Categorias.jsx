import { Link } from "react-router-dom";
import { memo } from "react";


const Categorias = memo(() => {
    return (
        <div>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </Link>
                <ul className="dropdown-menu">
                  <Link className="nav-link" to={"/category/placas-de-video"}>
                  <li className="dropdown-item" href="/#">Placas de Video</li>
                  </Link>
                  <Link className="nav-link" to={"/category/monitores"}>
                  <li className="dropdown-item" href="/#">Monitores</li>
                  </Link>
                  <Link className="nav-link" to={"/category/motherboards"}>
                  <li className="dropdown-item" href="/#">Placas Madres</li>
                  </Link>
                  <Link className="nav-link" to={"/category/procesadores"}>
                  <li className="dropdown-item" href="/#">Procesador</li>
                  </Link>
                  <Link className="nav-link" to={"/category/gabinetes"}>
                  <li className="dropdown-item" href="/#">Gabinete</li>
                  </Link>
                </ul>
              </li>
        </div>
    );
})

export default Categorias;
