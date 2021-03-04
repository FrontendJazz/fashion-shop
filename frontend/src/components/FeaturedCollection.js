import React, {useContext} from 'react';
import FeaturedProduct from "./FeaturedProduct";
import {ProductsContext} from '../context/products-context'



const FeaturedCollection = () => {
  const {products} = useContext(ProductsContext)
  const featuredItems = products.filter((el, idx) => idx< 4).map(product => <FeaturedProduct product={product} key={product.id} />)
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-8 py-20">
        {featuredItems}
      </div>
    </div>
  );
};

export default FeaturedCollection;