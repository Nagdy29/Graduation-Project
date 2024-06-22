import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/Storecontext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PaymentForm from "./Paymentform";

const Payment = () => {
  const { removecart, cartItem, food_list, getTotalCartAmount, url } =
    useContext(StoreContext);
  const [orderID, setOrderID] = useState("");
  const [amount, setAmount] = useState("");
  const [isPaymentReady, setIsPaymentReady] = useState(false);

  const handleOrderIDChange = (e) => setOrderID(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPaymentReady(true);
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount, // المبلغ المراد دفعه
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert("Transaction completed by " + details.payer.name.given_name);
      console.log("Details:", details);
    });
  };

  const onError = (err) => {
    console.error("Error:", err);
    alert("An error occurred during the transaction");
  };
  return (
    <>
      <div>
        <main class="page payment-page my-lg-5">
          <section class="payment-form dark">
            <div class="container">
              <div class="block-heading">
                <h2>Payment</h2>
              </div>
              <form>
                <div class="products">
                  <h3 class="title">Checkout</h3>
                  <div class="item">
                    <span class="price">{getTotalCartAmount()}</span>
                    <p class="item-name"> Subtotal</p>
                  </div>
                  <div class="item">
                    <span class="price">{5}</span>
                    <p class="item-name">Service</p>
                  </div>
                  <div class="total">
                    Total<span class="price">{getTotalCartAmount() + 5}</span>
                  </div>
                </div>
              </form>
              <div className=" ">
                <PaymentForm />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Payment;
