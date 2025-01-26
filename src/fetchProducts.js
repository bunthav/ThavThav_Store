export const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export const fetchCategories = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const categories = await response.json();
        return categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};


export const fetchProductsById = async (id) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch product with ID: ${id}`);
        const product = await response.json();
        return product;
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        return null; 
    }
};
