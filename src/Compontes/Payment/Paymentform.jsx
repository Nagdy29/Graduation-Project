// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { StoreContext } from "../../context/Storecontext";

const PaymentForm = () => {
  const { removecart, cartItem, food_list, getTotalCartAmount, url } =
    useContext(StoreContext);
  const [amount, setAmount] = useState("");
  const [isPaymentReady, setIsPaymentReady] = useState(false);

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
    <div className=" d-flex justify-content-center  form-paypal">
      <form onSubmit={handleSubmit} className="paypalll my-3 p-4">
        <div></div>
        <div>
          <label>Total:</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            required
            placeholder={getTotalCartAmount() + 5}
          />
        </div>
        <button type="submit" className="btn btn-outline-info my-3 w-50">
          {" "}
          Proceed to Payment
        </button>
      </form>

      {isPaymentReady && (
        <PayPalScriptProvider
          options={{
            "client-id":
              "AV1rLGVfDSIvHiUQ9JQii1sYo6l-uq9ta1RKQ4KzDOb5_IwW_Cq2Ynev-7eFwHi6PI0tSbL7bCHvt524",
          }}
        >
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        </PayPalScriptProvider>
      )}
    </div>
  );
};

export default PaymentForm;
