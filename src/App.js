import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Productos from './pages/productos/Productos';
import Contact from './pages/contact/Contact';
import ProductDetail from './pages/productDetail/ProductDetail';

import ProductCreate from './pages/productCreate/ProductCreate';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/productos/nuevo" element={<ProductCreate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;