import React from 'react';
import "./../App.css";

function UserPaymentPage() {
  const orderPlace = () => {
    console.log("order placed");
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const pay = async () => {
    let amount = 100;
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_bwFUQvFdcBdnqI",
      amount: parseInt(amount * 100),
      currency: "INR",
      name: "Readify",
      description: "Test Transaction",
      handler: function (response) {
        orderPlace();
      },
      prefill: {
        name: "Readify",
        email: "bookstore@gmail.com",
        contact: "9353098970",
      },
      notes: {
        address: "India",
      },
      theme: {
        color: "#158993",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="App">
      <br /><br /><br /><br /><br /><br />
      <h2>Hello</h2>
      <button className="button_pay" onClick={pay}>
        Pay with Razorpay
      </button>
    </div>
  );
}

export default UserPaymentPage;
