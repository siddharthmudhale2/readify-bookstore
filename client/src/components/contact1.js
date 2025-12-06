import React, { Component, useState } from "react";

function Contact1() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	// States for checking the errors 
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change 
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change 
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission 
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === "" || email === "") {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	// Showing success message 
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? "" : "none",
				}}
			>
				<h1>User {name} successfully registered!!</h1>
			</div>
		);
	};

	// Showing error message if error is true 
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? "" : "none",
				}}
			>
				<h1>Please enter all the fields</h1>
			</div>
		);
	};

	return (
		<div className="form">
			<br></br><br></br><br></br><br></br>
			<center>
				<div>
					<h1>Contact Form</h1>
				</div>
				<form>
					<table>
						<tbody>
							<tr>
								<th>
									<br></br>
									<label className="label" style={{ color: "black" }}>Contact Name</label> </th>
								<td>
								<br></br>
									<input
										onChange={handleName}
										className="input"
										value={name}
										type="text"
										placeholder="Contact Name"
									/> </td>
							</tr><tr>
								<th>
								<br></br>
									<label className="label" style={{ color: "black" }}>Email</label> </th>
								<td>
								<br></br>
									<input
										onChange={handleEmail}
										className="input"
										value={email}
										type="email"
										placeholder="Email Id"
									/> </td>
							</tr>
							<tr><th>
							<br></br>
								<label className="label" style={{ color: "black" }}>Subject</label> </th>
								<td>
								<br></br>
									<input
										className="input"
										value={subject}
										type="text"
										placeholder="Subject"
									/> </td>
							</tr>
							<tr><th>
							<br></br>
								<label className="label" style={{ color: "black" }}>Message</label> </th>
								<td>
								<br></br>
									<textarea rows={5} cols={30} value={message} >
									</textarea></td>
							</tr>
							<tr>
								<th colSpan={2}>
									<center>
									<button onClick={handleSubmit} type="submit">
										Submit
									</button>
									</center>
									</th>
							</tr>
						</tbody>
					</table>
				</form>
			</center>
		</div>
	);
}


export default Contact1;