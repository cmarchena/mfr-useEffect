import { Link } from "react-router-dom";
export default function ProductsList() {
    // generate an array of products where product is and object with id, name and price
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 10
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20
        },
        {
            id: 3,
            name: 'Product 3',
            price: 30
        }
    ];

    return (
        <div data-cy="product-list">
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <Link to={`/products/${product.id}`}>Go to details</Link>
                </div>
            ))}
        </div>
    )
}