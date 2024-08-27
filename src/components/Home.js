import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      {products.map((product, index) => (
        <ProductItem
          key={index} // Use a unique key if possible
          productName={product.name}
          price={product.price}
          rating={product.rating}
          discount={product.discount}
          availability={product.availability}
        />
      ))}
    </div>
  );
};

export default Home;
