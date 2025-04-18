import axios from 'axios';
import { useEffect, useState } from "react";

export const FetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3010/product/getproducts/');
        return response.data.products || []; //  Return product list directly
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export const useCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:3010/category/getcategories?limit=10&page=1");
                setCategories(response.data.categories || []);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    return categories;
};


export const fetchProductsByName = async (name) => {
    try {
        const response = await fetch(`http://localhost:3010/product/getproducts/${name}`);
        if (!response.ok) throw new Error(`Failed to fetch product with name: ${name}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with name ${name}:`, error);
        return null; 
    }
};
