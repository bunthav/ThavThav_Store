//no use

import React from 'react'

function ProductList({ onAddToCart }) {
    const products = [
        { id: 1, title: 'Product 1', price: 10, image: 'url-to-image-1' },
        { id: 2, title: 'Product 2', price: 20, image: 'url-to-image-2' },
      ];
    
      return (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      );
    }

export default ProductList