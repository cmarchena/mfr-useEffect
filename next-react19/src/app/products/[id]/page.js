import Link from "next/link";

export default async function ProductDetails({ params }) {
  const baseURL = "https://fakestoreapi.com";
  const { id } = params
  async function fetchProductByID(id) {
    const response = await fetch(`${baseURL}/products/${id}`);
    return await response.json();
  }
  // using next API get id from url (last segment)
  const product = await fetchProductByID(id);

  return (
    <div data-cy="product-item" className="product-item">
      <h2>Product Details</h2>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>Product ID: {product.id}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <Link href="/products">Go back</Link>
    </div>
  );
}
