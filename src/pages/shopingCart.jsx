import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./shopingCart.css";


function ShopingCart() {
  const { cartItems } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionCompleted, setTransactionCompleted] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleApprove = (details) => {
    console.log("Transaction completed:", details);
    setTransactionCompleted(true);
    localStorage.removeItem("cartItems");
    window.location.reload(); // Auto refreshes the page
  };

  // New function to clear the cart
  const handleClearCart = () => {
    localStorage.removeItem("cartItems"); // Remove items from localStorage
    window.location.reload(); // Refresh the page to reflect the changes
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <a href="/" className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </a>
          <span className="stext-109 cl4">Shopping Cart</span>
        </div>
      </div>

      <form className="bg0 p-t-75 p-b-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
              <div className="m-l-25 m-r--38 m-lr-0-xl">
                <div className="wrap-table-shopping-cart">
                  <table className="table-shopping-cart">
                    <thead>
                      <tr className="table_head">
                        <th className="column-1">Product</th>
                        <th className="column-2">Name</th>
                        <th className="column-3">Price</th>
                        <th className="column-4">Quantity</th>
                        <th className="column-5">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                          <tr className="table_row" key={index}>
                            <td className="column-1">
                              <div className="how-itemcart1">
                                <img src={item.image} alt={item.title} />
                              </div>
                            </td>
                            <td className="column-2">{item.title}</td>
                            <td className="column-3">${item.price}</td>
                            <td className="column-4">{item.qty}</td>
                            <td className="column-5">${(item.qty * item.price).toFixed(2)}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center">
                            Your cart is empty.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
              <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>
                <div className="flex-w flex-t bor12 p-b-13">
                  <div className="size-208">
                    <span className="stext-110 cl2">Subtotal:</span>
                  </div>
                  <div className="size-209">
                    <span className="mtext-110 cl2">${calculateTotal()}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={openModal}
                  className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                >
                  Proceed to Checkout
                </button>
                <button
                  type="button"
                  onClick={handleClearCart} // Clear cart button
                  className="flex-c-m stext-101 cl0 size-116 bg-danger bor14 hov-btn3 p-lr-15 trans-04 pointer"
                  style={{ marginTop: "15px" }}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {isModalOpen && (
        <div className="checkout-modal-overlay" onClick={closeModal}>
          <div
            className="checkout-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="checkout-modal-close-btn">
              X
            </button>
            <h2>Checkout</h2>
            <p>Total Amount: ${calculateTotal()}</p>

            <PayPalScriptProvider
              options={{
                "client-id":
                  "Aa3lxgrZwwHN_qFV-zL0WNxq0DmzSgbCsT5L7ZCyotkPa2nQ1V1ajBiGTCmJ-LzSsGwSywhK5MtGonhL",
                currency: "USD",
              }}
            >
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: calculateTotal(),
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then(handleApprove);
                }}
                onError={(err) => console.error("PayPal Checkout Error", err)}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      )}
    </div>
  );
}


export default ShopingCart;
