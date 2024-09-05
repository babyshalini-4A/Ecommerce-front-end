// src/pages/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-8">We'd love to hear from you. Please fill out the form below to get in touch.</p>
      
      <form
        action="#"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 bg-phlox text-white rounded-md hover:bg-purple-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
      

    </div>

    
  );
};

export default ContactUs;
