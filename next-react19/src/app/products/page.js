import Link from "next/link";

export default async function ProductsList() {
    // In this version we fetch them from the API and store in localstorage to avoid unnecessary
    // API calls.

    const baseURL = "https://fakestoreapi.com";

    async function fetchAllProducts() {
        const response = await fetch(`${baseURL}/products`);
        return await response.json();
    }
    const products = await fetchAllProducts();


    return (
        <div data-cy="product-list" className="product-list">
            {products?.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} />
                    <p className="product-title">{product.title}</p>
                    <p>Price: {product.price}</p>
                    <Link href={`/products/${product.id}`}>Go to details</Link>
                </div>
            ))}
        </div>
    );
}
