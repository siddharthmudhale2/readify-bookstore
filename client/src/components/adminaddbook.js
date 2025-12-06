import Header from "./header";
import React, { Component, useState } from "react";
import axios from 'axios';

function AdminAddBook() {
	const [bname, setBookName] = useState("");
	const [btype, setBookType] = useState("Computers");
	const [price, setPrice] = useState("");
	const [quantity, setQuantity] = useState("");
	const [details, setDetails] = useState("");
	const [image, setImage] = useState(null);
	const booktypes = ["Computers", "Electronics", "Food", "Sports","Accounts"];
	const onOptionChangeHandler = (event) => {
		setBookType(event.target.value);
		console.log(
			"User Selected Value - ",
			event.target.value
		);
	};
	/*
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
			'http://localhost:5000/api/newbook/add', {
			method: "post",
			body: JSON.stringify({ bname: bname, btype: btype, quantity: quantity, details:details, price:price }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setBookName("")
			setBookType("Computers")
			setDetails("")
			setPrice("")
			setQuantity("")
		}
	}*/


	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('bname', bname);
		formData.append('btype', btype);
		formData.append('quantity', quantity);
		formData.append('details', details);
		formData.append('price', price);
		formData.append('image', image);
		console.log("Form Data : ", formData);
		try {
			console.log("Upload Image", image);
			const config = {
				headers: {
					"content-type": "multipart/form-data"
				}
			};
			const API = "adminaddbook";
			const HOST = "http://localhost:5000";
			const url = `${HOST}/${API}`;
			const result = await axios.post(url, formData, config);
			console.log("Result: ", result);
			if (result) {
				alert("Data saved succesfully");
				setBookName("")
				setBookType("")
				setQuantity("")
				setPrice("")
				setDetails("")
			}
		} catch (error) {
			console.error(error);
		}
	}
	const handleImageSelect = (event) => {
		setImage(event.target.files[0])
	}
	return (
		<div className="form">
			<br></br><br></br><br></br><br></br>
			<center>
				<div>
					<br></br><br></br>
					<h1>Add New Book</h1>
				</div>
				<form encType="multipart/form-data" method="post" onSubmit={handleOnSubmit}>
					{/* Labels and inputs for form data */}
					<table>
						<tr>
							<th><br></br>
								<label className="label" style={{ color: "black" }}>Book Name</label>
							</th>
							<td><br></br>
								<input
									onChange={ev => setBookName(ev.target.value)}
									className="input"
									value={bname} required
									type="text" maxLength={15}
									title="Book Name should be between 1 to 15 characters"
									placeholder="Book Name"
								/> </td>
						</tr>
						<tr>
							<th><br></br>
								<label className="label" style={{ color: "black" }}>Book Type</label>
							</th>
							<td><br></br>
								<select onChange={onOptionChangeHandler}>
									{booktypes.map((option, index) => {
										return (
											<option key={index}>
												{option}
											</option>
										);
									})}
								</select>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Number Of Books</label> </th>
							<td><br></br>
								<input
									onChange={ev => setQuantity(ev.target.value)}
									className="input"
									value={quantity} maxLength={3}
									pattern="[0-9]{1,3}" required
									title="Books number should be 1 to 3"
									placeholder="Number Of Books"
									type="text"
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Price</label> </th>
							<td><br></br>
								<input
									onChange={ev => setPrice(ev.target.value)}
									className="input"
									value={price} maxLength={3}
									type="text" required
									pattern="[0-9]{1,3}"
									title="Price should be 1 to 3"
									placeholder="Price"
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>File Upload</label> </th>
							<td><br></br>
							<input
									className="input"
									type="file"
									placeholder="Photo"
									onChange={handleImageSelect}
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Details</label> </th>
							<td><br></br>
								<textarea rows={5} cols={30} value={details}
									onChange={ev => setDetails(ev.target.value)}>
								</textarea>
							</td>
						</tr>
						<tr><th colSpan={2}>
							<br></br>
							<center>
								<button type="submit">
									Add New Book
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
export default AdminAddBook;