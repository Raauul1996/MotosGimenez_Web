import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage.jsx';


const Router = () => {
    return (

        <BrowserRouter basename=''>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
        </BrowserRouter>
    );
}

export default Router;