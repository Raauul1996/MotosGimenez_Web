import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage.jsx';
import ServicesPage from '../pages/ServicesPage.jsx';
import SalesPage from '../pages/SalesPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import "../../style.css"

const Router = () => {
    return (

        <BrowserRouter basename=''>
            <div className='bg-dark text-white vh-100'>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/servicios" element={<ServicesPage />} />
                        <Route path="/ventas" element={<SalesPage />} />
                        <Route path="/contacto" element={<ContactPage />} />
                    </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Router;