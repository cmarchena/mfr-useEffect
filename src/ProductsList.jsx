import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ProductsList() {
  // Now instead of hardcoding the products, we will fetch them from the API
  const baseURL = "https://fakestoreapi.com";
  /* 
  An example of what we do get from the API:
  [
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": { "rate": 3.9, "count": 120 }
    }
  ] */

  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     fetch(`${baseURL}/products`)
  //       .then((response) => response.json())
  //       .then((data) => setProducts(data));
  //   }, []);
  async function fetchAllProducts() {
    const response = await fetch(`${baseURL}/products`);
    const data = await response.json();
    console.log({ data });
    setProducts(data);
  }
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div data-cy="product-list" className="product-list">
      {products.map((product) => (
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
