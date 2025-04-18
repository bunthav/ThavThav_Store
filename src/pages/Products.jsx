import React, { useState, useContext, useEffect } from "react";
import { useCategories, FetchProducts } from "../fetchProducts";
import { CartContext } from "../CartContext";
import "./Products.css";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const categories = useCategories();
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await FetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setSelectedQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart({ ...selectedProduct, qty: selectedQuantity }); // ✅ cleaned
      console.log(`Added ${selectedQuantity} x ${selectedProduct.name} to cart`);
      closeModal();
    }
  };

  return (
    <div>
      <div className="bg0 m-t-23 p-b-140" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <div className="filter-container">
                <button className="filter-btn" style={{ borderRadius: "8%" }} onClick={() => handleCategoryChange("all")}>
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.name)}
                    className={`filter-btn ${selectedCategory === category.name ? "active" : ""}`}
                    style={{ borderRadius: "8%" }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="row isotope-grid">
            {products
              .filter((product) =>
                selectedCategory === "all" || product.category_name === selectedCategory
              )
              .map((product) => (
                <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item">
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img
                        src={`http://localhost:3010/uploads/products/${product.photo}`}
                        alt={product.name}
                        style={{
                          width: "90%",
                          height: "auto",
                          objectFit: "contain", // optional for better fitting
                        }}
                      />
                      <button
                        onClick={() => handleQuickView(product)}
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                        style={{ cursor: "pointer", backgroundColor: "grey", border: "none", padding: "0" }}
                      >
                        Quick View
                      </button>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l">
                        <button
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                          style={{
                            background: "none",
                            border: "none",
                            padding: "0",
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                          onClick={() => {
                            handleQuickView(product);
                          }}
                        >
                          {product.name}
                        </button>
                        <span className="stext-105 cl3">${product.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {isModalOpen && selectedProduct && (
            <div className="modal-overlay" onClick={handleOverlayClick}>
              <div className="modal-content">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src={`http://localhost:3010/uploads/products/${selectedProduct.photo}`}
                      alt={selectedProduct.name}
                      style={{
                        width: "300px",
                        height: "auto",
                        marginTop: "50px",
                        border: "4px solid black",
                        padding: "30px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="col-md-6" style={{ marginTop: "50px" }}>
                    <h2 className="mtext-105 cl2">{selectedProduct.name}</h2>
                    <span className="mtext-106 cl2">${selectedProduct.price}</span>
                    <p className="stext-102 cl3 p-t-23">{selectedProduct.description}</p>

                    <div className="p-t-33">
                      <label htmlFor="quantity">Quantity:</label>
                      <select
                        id="quantity"
                        value={selectedQuantity}
                        onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                        className="size-204 respon6-next"
                        style={{ width: "100px" }}
                      >
                        {[...Array(10).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                      <button
                        className="stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                        onClick={handleAddToCart}
                        style={{ margin: "20px 25%" }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
