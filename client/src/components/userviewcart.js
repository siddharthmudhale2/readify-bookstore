import React, { Component, useState, useEffect } from "react";

function UserViewCart() {
    const [data, setData] = useState([]);
    const [ids, setIds] = useState('');
    const [total, setTotal] = useState('');
    let userid = sessionStorage.getItem('userid').toString()

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

    const paymentDone = async (e) => {
        if (e && e.preventDefault) e.preventDefault(); // ✅ Safe fallback
        console.log("Payment Done Success");
        let result = await fetch(
            'http://localhost:5000/api/newcart/paymentdone/' + userid + "/" + ids, {
            method: "put",
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/json'
            }
            });
        result = await result.json();
        console.warn(result);
    };

    
    const makePayment = async () => {
        let amount = total;
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        const options = {
            key: "rzp_test_bwFUQvFdcBdnqI", // This is Api key. you will get it from razorpay dashboard > account and settings > API keys
            amount: parseInt(amount * 100),
            currency: "INR", // your 3 letter currency code
            name: "Readify", // project or transaction name
            description: "Test Transaction",
            //image: "https://avatars.githubusercontent.com/u/76506184?v=4", // your project logo
            handler: function (response) {
                // console.log("response", response);
                paymentDone(); // after payment completes on stripe this function will be called and you can do your stuff
            },
            prefill: {
                name: "Readify",
                email: "bookstore@gmail.com",
                contact: "9886239083",
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

    useEffect(() => {
        fetch('http://localhost:5000/api/newcart/getbyuserid/' + userid)
            .then(response => response.json())
            .then(data => {
                setData(data)
                console.log("Data : ", data)
                let total = 0;
                let cartids=''
                for (let i = 0; i < data.length; i++) {
                    console.log(i + " Data : ", data[i])
                    if(data[i]['paymentstatus']=='NotPaid')
                    {
                        total = total + parseInt(data[i]['total'])
                        if(cartids.length==0)
                            cartids=data[i]['_id']
                        else
                            cartids=cartids+","+data[i]['_id']
                    }
                }
                console.log("Total : ", total)
                setTotal(total)
                setIds(cartids)
            }
            ).catch(err => console.error("Error fetching data: ", err));
    }, []);
    return (
        <div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>
                <center> User View Add To Cart Page </center>
            </h2>
            <p>
                <table style={{ width: '90%', left: '50px', position: 'absolute', border: '1px solid black' }}>
                    <tr style={{ width: '800px', border: '1px solid black', fontSize: '20px' }}>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Book Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Book Type</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Quantity</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Price</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Total</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Payment Status</th>
                    </tr>
                    {data.map(x => (
                        <tr style={{ width: '800px', fontSize: '20px' }}>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.bname}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.btype}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.quantity}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.price}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.total}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.paymentstatus}</td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
{total > 0 ?
                            <button
                                className="button_pay"
                                onClick={() => {
                                    makePayment();
                                }}
                            >
                                Make Payment
                            </button> : 'No Books Added'
                        }
                        </td>
                        <td style={{ fontSize: '20px' }}>Total Amount</td>
                        <td style={{ fontSize: '20px' }}>{total}</td>
                    </tr>
                </table>
            </p>
        </div>
    );
}
export default UserViewCart;