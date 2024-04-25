import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ProductsList() {
  // In this version we fetch them from the API and store in localstorage to avoid unnecessary
  // API calls.

  const baseURL = "https://fakestoreapi.com";
  const [products, setProducts] = useState();

  async function fetchAllProducts() {
    const response = await fetch(`${baseURL}/products`);
    const data = await response.json();
    setProducts(data);
    localStorage.setItem("products", JSON.stringify(data));
  }
  const storedProducts = localStorage.getItem("products");
  useEffect(() => {
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      fetchAllProducts();
    }
  }, []);

  return (
    <div data-cy="product-list" className="product-list">
      {products?.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <p className="product-title">{product.title}</p>
          <p>Price: {product.price}</p>
          <Link to={`/products/${product.id}`}>Go to details</Link>
        </div>
      ))}
    </div>
  );
}
