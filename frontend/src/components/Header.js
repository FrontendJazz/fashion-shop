import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {CartContext} from "../context/cart-context";


const Header = () => {
  const {cartItems} = useContext(CartContext)
  console.log(cartItems)
  const total = cartItems.reduce((acc, rec) => acc + rec.quantity, 0)
  return (
    <header>
      <nav className="bg-gray-100 py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-bold text-xl text-indigo-600">Samartsev</Link>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle">
              <i className="fas fa-bars"/>
            </button>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
            <Link to="/" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</Link>
            <Link to="/shop"
               className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Shop</Link>
          </div>
          <Link to="/cart"
            className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
            aria-label="Cart">
            <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="absolute inset-0 object-right-top -mr-6">
    <div
      className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
      {total}
    </div>
  </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;