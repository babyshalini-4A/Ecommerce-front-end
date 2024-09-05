import React from 'react';
import mobileImage from '../../assets/product/mobile.jpg'; 
import laptopImage from '../../assets/blogs/blog-2.jpg';
import vrImage from '../../assets/blogs/blog-3.jpg';
import headphoneImage from '../../assets/product/p-4.jpg';
import samsungGalaxyImage from '../../assets/product/samsung.jpg';
import iphoneImage from '../../assets/product/iphone.jpg';
import googlePixelImage from '../../assets/product/google.jpg';
import oneplusImage from '../../assets/product/oneplus.jpg';

const products = [
  {
    id: 1,
    name: 'Mobile',
    image: mobileImage,
    price: '50,000',
  },
  {
    id: 2,
    name: 'Laptop',
    image: laptopImage,
    price: '1,20,000',
  },
  {
    id: 3,
    name: 'VR Headset',
    image: vrImage,
    price: '30,000',
  },
  {
    id: 4,
    name: 'Headphones',
    image: headphoneImage,
    price: '1,500',
  },
  {
    id: 5,
    name: "Samsung Galaxy S21",
    brand: "Samsung",
    price: "$799",
    image: samsungGalaxyImage,
    description: "A high-performance smartphone with a sleek design.",
  },
  {
    id: 6,
    name: "iPhone 13",
    brand: "Apple",
    price: "$999",
    image: iphoneImage,
    description: "The latest iPhone with cutting-edge features.",
  },
  {
    id: 7,
    name: "Google Pixel 6",
    brand: "Google",
    price: "$699",
    image: googlePixelImage,
    description: "A smartphone with a clean interface and great camera.",
  },
  {
    id: 8,
    name: "OnePlus 9",
    brand: "OnePlus",
    price: "$729",
    image: oneplusImage,
    description: "A powerful phone with a fast charging feature.",
  },
];

const Shop = ({ handleAddToCart }) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-5">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg font-semibold text-gray-700">{product.price}</p>
            <button
              className="mt-4 px-4 py-2 bg-phlox text-white rounded-md hover:bg-purple-700 transition duration-200"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
