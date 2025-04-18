import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const encodeFormData = (data) => {
    return new URLSearchParams(data).toString();
  };

  // NEW: Clear entire cart (both database and local)
  const clearCart = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  try {
    // Clear from database if logged in
    if (user && token) {
      const response = await fetch("http://localhost:3010/cart/deletecart/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart_username: user.name }),
      });

      if (!response.ok) {
        throw new Error("Failed to clear database cart");
      }
    }

    // Always clear local storage and state
    setCartItems([]);
    localStorage.removeItem("cartItems");
    return true; // Indicate success
  } catch (error) {
    console.error("Failed to clear cart:", error);
    return false; // Indicate failure
  }
};

  // NEW: Fetch cart on mount if user is logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (user && token) {
      fetchCartFromDatabase(user.name, token);
    }
  }, []);

  const addToCart = async (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!user || !token) {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + product.qty } : item
          );
        }
        return [...prevItems, { ...product }];
      });
      return;
    }

    try {
      const payload = {
        cart_username: user.name,
        cart_productname: product.name,
        quantity: product.qty,
      };

      const response = await fetch("http://localhost:3010/cart/updatecart/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
        body: encodeFormData(payload),
      });

      if (response.ok) {
        fetchCartFromDatabase(user.name, token);
      } else {
        console.error("Error adding to cart:", await response.json());
      }
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  const removeFromCart = async (productName) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!user || !token) {
      setCartItems((prevItems) => prevItems.filter((item) => item.name !== productName));
      return;
    }

    try {
      const payload = {
        cart_username: user.name,
        cart_productname: productName,
      };

      const response = await fetch("http://localhost:3010/cart/deletecart/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
        body: encodeFormData(payload),
      });

      if (response.ok) {
        fetchCartFromDatabase(user.name, token);
      } else {
        console.error("Error removing item:", await response.json());
      }
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const syncCartToDatabase = async (user, token) => {
    if (!cartItems.length || !user || !user.name || !token) return;

    const cartData = cartItems.map((item) => ({
      cart_username: user.name,
      cart_productname: item.name,
      quantity: item.qty,
    }));

    try {
      for (const item of cartData) {
        await fetch("http://localhost:3010/cart/updatecart/", {
          method: "PUT",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`,
          },
          body: encodeFormData(item),
        });
      }

      fetchCartFromDatabase(user.name, token);
    } catch (error) {
      console.error("Failed to sync cart:", error);
    }
  };

  const fetchCartFromDatabase = async (username, token) => {
    try {
      const response = await fetch(`http://localhost:3010/cart/getcart/?user=${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.ok) {
        setCartItems(data);
      } else {
        console.error("Error fetching cart:", data.error);
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        syncCartToDatabase,
        clearCart, // NEW: Added clearCart to context
      }}
    >
      {children}
    </CartContext.Provider>
  );
};