import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./shopingCart.css";

function ShoppingCart() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);

  const calculateTotal = () =>
    cartItems.reduce((total, item) => {
      const price = item.price || (item.product_price || 0);
      const qty = item.qty || (item.quantity || 0);
      return total + (price * qty);
    }, 0).toFixed(2);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setCheckoutError(null);
  };

  const handleCheckoutSuccess = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!user || !token) {
      alert("Please login to complete checkout");
      return;
    }

    try {
      const response = await fetch("http://localhost:3010/receipt/checkout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          receipt_username: user.name,
          payment_method: "PayPal"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Clear cart only after successful receipt creation
        await clearCart();
        alert(`Checkout successful! Receipt ID: ${data.receipt_code}`);
        window.location.reload(); // Refresh to update UI
      } else {
        throw new Error(data.error || "Failed to create receipt");
      }
    } catch (error) {
      console.error("Checkout failed:", error);
      setCheckoutError(error.message);
    }
  };

  const handleApprove = async (data, actions) => {
    try {
      // First capture the PayPal payment
      const details = await actions.order.capture();
      console.log("Payment captured:", details);

      // Then process our own checkout
      await handleCheckoutSuccess();

      return details;
    } catch (error) {
      console.error("Payment processing failed:", error);
      setCheckoutError("Payment processing failed. Please try again.");
      throw error; 
    }
  };

  return (
    <div>

      <div className="bg0 p-t-75 p-b-85">
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
                                <img
                                  src={`http://localhost:3010/uploads/products/${item.photo || item.image}`}
                                  alt={item.product_name || item.name || item.title}
                                />
                              </div>
                            </td>
                            <td className="column-2">
                              {item.product_name || item.name || item.title}
                            </td>
                            <td className="column-3">
                              ${item.price || item.product_price}
                            </td>
                            <td className="column-4">
                              {item.quantity || item.qty}
                            </td>
                            <td className="column-5">
                              ${(
                                (item.price || item.product_price) *
                                (item.quantity || item.qty)
                              ).toFixed(2)}
                            </td>
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

                {cartItems.length > 0 && (
                  <>
                    <button
                      type="button"
                      onClick={openModal}
                      className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                    >
                      Proceed to Checkout
                    </button>

                    <button
                      type="button"
                      onClick={clearCart}
                      className="flex-c-m stext-101 cl0 size-116 bg-danger bor14 hov-btn3 p-lr-15 trans-04 pointer"
                      style={{ marginTop: "15px" }}
                    >
                      Clear Cart
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

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

            {checkoutError && (
              <div className="alert alert-danger">{checkoutError}</div>
            )}

            <PayPalScriptProvider
              options={{
                "client-id": "Aa3lxgrZwwHN_qFV-zL0WNxq0DmzSgbCsT5L7ZCyotkPa2nQ1V1ajBiGTCmJ-LzSsGwSywhK5MtGonhL",
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
                onApprove={handleApprove}
                onError={(err) => {
                  console.error("PayPal Checkout Error", err);
                  setCheckoutError("Payment failed. Please try again or use another payment method.");
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;