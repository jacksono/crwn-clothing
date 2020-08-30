import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HLYPSDwo18ECcxgiX3IYkpB8wxBUS7BJ8zJmtdjx6v5jsDdYEt8R2b8WCgNJJcGDQpziaXamdffXK7QQTNMqTg300DBftndLi";

  const onToken = token => {
    alert("Payment Succesful");
  };
  return (
    <StripeCheckout
      token={onToken}
      label="Pay Now"
      name="CRWM Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
