import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-secondary">
            <div className="container-fluid m-2">
                <Link to="/" className="navbar-brand">Motos Gimenez</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-0">
                        <li className="nav-item">
                            <Link to="/servicios" className="nav-link active" aria-current="page" >Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/venta" className="nav-link" >Venta</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-link" >Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}