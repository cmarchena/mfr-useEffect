import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
export default function ProductDetails() {
  const baseURL = "https://fakestoreapi.com";
  const [product, setProduct] = useState([]);

  const { id } = useParams();
  async function fetchProductByID(id) {
    const response = await fetch(`${baseURL}/products/${id}`);
    const data = await response.json();
    setProduct(data);
  }
  useEffect(() => {
    fetchProductByID(id);
  }, []);
  return (
    <div data-cy="product-item" className="product-item">
      <h2>Product Details</h2>
      <p>Product ID: {product.id}</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <Link to="/products">Go back</Link>
    </div>
  );
}
