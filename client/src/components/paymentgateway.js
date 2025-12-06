export default async function displayRazorpay() {
    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());
  
    console.log(data);
  
    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount,
      name: "Learn Code Online",
      description: "Wallet Transaction",
      //image: "http://localhost:1337/logo.png",
      order_id: data.id,
      handler: function (response) {
        alert("PAYMENT ID ::" + response.razorpay_payment_id);
        alert("ORDER ID :: " + response.razorpay_order_id);
      },
      prefill: {
        name: "Siddharth",
        email: "mudhalesiddhu@gmail.com",
        contact: "9110661348",
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }