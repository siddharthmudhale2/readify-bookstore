import Header from "./header";
import React, { Component, useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function UserSearchBook1() {
	const [bname, setBookName] = useState("");
	const [btype, setBookType] = useState("");
	const [price, setPrice] = useState("0");
	const [quantity, setQuantity] = useState("0");
	const [details, setDetails] = useState("");
	const [reqqty, setReqQty] = useState("1");
	const [total, setTotal] = useState("0");
	const [dbdata, setDbdata] = useState('');

	let userid = sessionStorage.getItem('userid').toString()
	let bookid = sessionStorage.getItem('bookid').toString()
	let bookname = sessionStorage.getItem('bname').toString()
	let booktype = sessionStorage.getItem('btype').toString()
	let qty = sessionStorage.getItem('quantity').toString()
	let bookprice = sessionStorage.getItem('price').toString()
	let bookdetails = sessionStorage.getItem('details').toString()

//	setBookName(bookname)
	//setBookType(booktype)
//setDetails(bookdetails)
//setPrice(bookprice)
//setQuantity(qty)

	console.log("User Id : ", userid)
	console.log("Book Id : ", bookid)

	const navigate = useNavigate();
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		if (quantity != undefined && reqqty != undefined && quantity != NaN && reqqty != NaN  && price != NaN && price != undefined) {
			//let qty = parseInt(quantity)
			let req_qty = parseInt(reqqty)
			if (req_qty > qty) {
				alert("You can't select more than available qty")
				//setReqQty(event.target.value)
				setReqQty(qty)
				setTotal(bookprice * qty)
			}
			else {
				let result = await fetch(
					'http://localhost:5000/api/newcart/add', {
					method: "post",
					body: JSON.stringify({
						bname:bookname, btype:booktype, quantity:reqqty, details:bookdetails, price:bookprice,
						total: (bookprice * req_qty).toString(), paymentstatus: 'NotPaid', userid: userid, bookid: bookid
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				result = await result.json();
				console.warn(result);
				if (result) {
					alert("Data saved succesfully");
					setBookName("")
					setBookType("")
					setDetails("")
					setPrice("")
					setQuantity("")
					let path = '/userviewcart';
					navigate(path);
					window.location.reload(false);
				}
			}
		}
	}

	const onTextChangeHandler = (event) => {
		console.log("Value - ", event.target.value)
		setReqQty(event.target.value);
		if (quantity != undefined && reqqty != undefined && quantity != NaN && reqqty != NaN && price != NaN && price != undefined) {
			console.log("Undefined Quantity - ", quantity, " Req Quantity : ", reqqty);
		}
		else {
			console.log("Quantity - ", quantity, " Req Quantity : ", reqqty);
			//let qty = parseInt(quantity)
			let req_qty = parseInt(reqqty)
			if (req_qty > qty) {
				alert("You can't select more than available qty")
				setReqQty(event.target.value)
			}
		}
		//console.log("User Selected Value - ",event.target.value);
	};
	/*
		function loadScript(src) {
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
		}
	
		async function displayRazorpay() {
			const res = await loadScript(
				"https://checkout.razorpay.com/v1/checkout.js"
			);
	
			if (!res) {
				alert("Razorpay SDK failed to load. Are you online?");
				return;
			}
	
			// creating a new order
			const result = await axios.post("http://localhost:5000/api/payment/orders");
	
			if (!result) {
				alert("Server error. Are you online?");
				return;
			}
			// Getting the order details back
			const { amount, id: order_id, currency } = result.data;
	
			const options = {
				key: "rzp_test_bwFUQvFdcBdnqI", // Enter the Key ID generated from the Dashboard
				amount: amount.toString(),
				currency: currency,
				name: "Soumya Corp.",
				description: "Test Transaction",
				//image: { logo },
				order_id: order_id,
				handler: async function (response) {
					const data = {
						orderCreationId: order_id,
						razorpayPaymentId: response.razorpay_payment_id,
						razorpayOrderId: response.razorpay_order_id,
						razorpaySignature: response.razorpay_signature,
					}; const result = await axios.post("http://localhost:5000/api/payment/success", data);
	
					alert(result.data.msg);
				},
				prefill: {
					name: "Soumya Dey",
					email: "SoumyaDey@example.com",
					contact: "9999999999",
				},
				notes: {
					address: "Soumya Dey Corporate Office",
				},
				theme: {
					color: "#61dafb",
				},
			};
	
			const paymentObject = new window.Razorpay(options);
			paymentObject.open();
		}
	*/


	return (
		<div className="form">
			<br></br><br></br><br></br><br></br>
			<center>
				<div>
					<br></br><br></br>
					<h1>Add to Cart Page</h1>
				</div>
				<form encType="multipart/form-data" method="post" onSubmit={handleOnSubmit}>
					{/* Labels and inputs for form data */}
					<table>
						<tr>
							<th><br></br>
								<label className="label" style={{ color: "black" }}>Book Name</label>
							</th>
							<td><br></br>{bookname}
								{/* <input
									onChange={ev => setBookName(ev.target.value)}
									className="input"
									value={bname} required
									type="text" maxLength={15}
									title="Book Name should be between 1 to 15 characters"
									placeholder="Book Name" readOnly
								/>  */}
							</td>
						</tr>
						<tr>
							<th><br></br>
								<label className="label" style={{ color: "black" }}>Book Type</label>
							</th>
							<td><br></br>
								{booktype}
								{/* <input
									onChange={ev => setBookType(ev.target.value)}
									className="input" readOnly
									value={btype} required
									type="text" maxLength={15}
									title="Book Name should be between 1 to 15 characters"
									placeholder="Book Type"
								/> */}
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Number Of Books</label> </th>
							<td><br></br>
								{qty}
								{/* <input
									onChange={ev => setQuantity(ev.target.value)}
									className="input" readOnly
									value={quantity} maxLength={3}
									pattern="[0-9]{1,3}" required
									title="Books number should be 1 to 3"
									placeholder="Number Of Books"
									type="text"
								/> */}
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Price</label> </th>
							<td><br></br>
								{bookprice}
								{/* <input
									onChange={ev => setPrice(ev.target.value)}
									className="input" readOnly
									value={price} maxLength={3}
									type="text" required
									pattern="[0-9]{1,3}"
									title="Price should be 1 to 3"
									placeholder="Price"
								/> */}
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Details</label> </th>
							<td><br></br>
								{bookdetails}
								{/* <textarea rows={5} cols={30} value={details} readOnly
									onChange={ev => setDetails(ev.target.value)}>
								</textarea> */}
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Required Number Of Books</label> </th>
							<td><br></br>
								<input
									onChange={onTextChangeHandler}
									className="input"
									value={reqqty} maxLength={3}
									pattern="[0-9]{1,3}" required
									title="Books number should be 1 to 3"
									placeholder="Number Of Books"
									type="text"
									min={1}
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Total Price</label> </th>
							<td><br></br>
								<input
									onChange={ev => setTotal(ev.target.value)}
									className="input" readOnly
									value={reqqty * bookprice} maxLength={3}
									type="text" required
									pattern="[0-9]{1,3}"
									title="Total Price digits should be 1 to 3"
									placeholder="Total Price"
								/>
							</td>
						</tr>
						<tr><th colSpan={2}>
							<br></br>
							<center>
								<button type="submit" onClick={handleOnSubmit}>
									Add to Cart
								</button>
							</center>
						</th>
						</tr>
					</table>
				</form>
			</center>
		</div>
	);
}
export default UserSearchBook1;