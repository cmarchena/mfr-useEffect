import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function ProductsList() {
  // For the third and final version we create a timestamp for the localstorage and
  // define an invalidation range
  // we will also prevent double fetching of the data by using a useRef hook
  const baseURL = "https://fakestoreapi.com";
  const [products, setProducts] = useState();
  const isMounted = useRef(false);

  async function fetchAllProducts() {
    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = MINUTE * 60;
    const DAY = 24 * HOUR;
    const response = await fetch(`${baseURL}/products`);
    const data = await response.json();
    setProducts(data);
    localStorage.setItem("products", JSON.stringify(data));
    localStorage.setItem("timestamp", Date.now().toString());
    localStorage.setItem("invalidation-range", (20 * SECOND).toString());
    return data;
  }

  const storedProducts = localStorage.getItem("products");
  const timestamp = localStorage.getItem("timestamp");
  const invalidationRange = localStorage.getItem("invalidation-range");
  console.log({ timestamp, invalidationRange });
  useEffect(() => {
    const now = Date.now();
    const lastFetch = parseInt(timestamp, 10);
    const invalidationTime = lastFetch + parseInt(invalidationRange, 10);
    console.log(now < invalidationTime);
    if (storedProducts && now < invalidationTime) {
      setProducts(JSON.parse(storedProducts));
    } else {
      if (!isMounted.current) {
        isMounted.current = true;
        fetchAllProducts().then((data) => setProducts(data));
      }
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
