import React, {useContext} from 'react';
import {ProductsContext} from '../context/products-context'
import FeaturedProduct from "../components/FeaturedProduct";
import Layout from "../components/Layout";

const Shop = () => {
  const {products} = useContext(ProductsContext)
  const allProducts = products.map(product => <FeaturedProduct product={product} key={product.id} />)
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h2 className="head text-3xl font-bold mb-4">All products</h2>
        <div className="grid grid-cols-4 gap-8">
          {
            allProducts
          }
        </div>
      </div>
    </Layout>
  );
};

export default Shop;