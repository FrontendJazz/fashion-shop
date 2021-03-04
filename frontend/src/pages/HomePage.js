import React from 'react';
import Layout from "../components/Layout";
import FeaturedCollection from "../components/FeaturedCollection";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCollection />
    </Layout>
  );
};

export default HomePage;