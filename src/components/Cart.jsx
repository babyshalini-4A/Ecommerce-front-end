import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
              <p className="text-lg font-semibold text-gray-700">{item.price}</p>
              <p className="text-md font-semibold text-gray-500">
                Quantity: {item.quantity}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
