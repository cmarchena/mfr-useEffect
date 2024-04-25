import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
export default function ProductDetails() {
  const baseURL = "https://fakestoreapi.com";

  const [product, setProduct] = useState([]);
  const isMounted = useRef(false);
  const { id } = useParams();
  async function fetchProductByID(id) {
    const response = await fetch(`${baseURL}/products/${id}`);
    const data = await response.json();
    setProduct(data);
  }
  async function fetchAllProducts() {
    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = MINUTE * 60;
    const DAY = 24 * HOUR;
    const response = await fetch(`${baseURL}/products`);
    const data = await response.json();
    localStorage.setItem("products", JSON.stringify(data));
    localStorage.setItem("timestamp", Date.now().toString());
    localStorage.setItem("invalidation-range", (20 * SECOND).toString());
    return data;
    // we could have imported this function from the ProductsList component instead of copying it
  }
  const storedProducts = localStorage.getItem("products");
  const timestamp = localStorage.getItem("timestamp");
  const invalidationRange = localStorage.getItem("invalidation-range");
  useEffect(() => {
    const now = Date.now();
    const lastFetch = parseInt(timestamp, 10);
    const invalidationTime = lastFetch + parseInt(invalidationRange, 10);
    console.log(now < invalidationTime);
    if (storedProducts && now < invalidationTime) {
      setProduct(
        JSON.parse(storedProducts).find((product) => product.id === +id)
      );
    } else {
      if (!isMounted.current) {
        isMounted.current = true;
        fetchProductByID(id);
        fetchAllProducts();
      }
    }
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
