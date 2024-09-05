import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/Footer/Footer';
import Shop from './components/Shop/Shop';
import Login from './components/Login';
import Signup from './components/Signup';
import ContactUs from './components/pages/ContactUs';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingProduct = prevItems.find(item => item.id === product.id);
      if (existingProduct) {
        // If it is, increase the quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If it's not, add it to the cart with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/Hero" element={<Hero />} 
        
        />
        <Route path="/shop" element={<Shop handleAddToCart={handleAddToCart} />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
};

export default App;
