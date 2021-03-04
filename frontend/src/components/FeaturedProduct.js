import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {CartContext} from "../context/cart-context";


const FeaturedProduct = ({product}) => {
  const {addToCart, cartItems, increase} = useContext(CartContext)
  const itemInCart = cartItems.find(el => el.id === product.id)
  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
        <Link to={`/shop/${product.id}`}>
          <img className="w-full" src={product.images[0]} alt="Sunset in the mountains"/>
        </Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <Link to={`/shop/${product.id}`}>{product.title}</Link>
          </div>
          <p className="text-gray-700 text-base">
            Price: {product.price}$
          </p>
          {!itemInCart &&
          <button
            className="px-6 py-2 mt-4 transition ease-in duration-200 uppercase rounded bg-gray-800 text-white border-2 border-gray-900 focus:outline-none"
            onClick={() => addToCart(product)}
          >Add to cart</button>
          }
          {itemInCart &&
          <button
            className="px-6 py-2 mt-4 transition ease-in duration-200 uppercase rounded border-2 border-gray-900 focus:outline-none"
            onClick={() => increase(product.id)}
          >Add more</button>
          }
        </div>
        <div className="px-6 py-4">
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">#woman</span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">#dress</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;