import { validate as validateEmail } from 'email-validator';
import React, { Component, useState } from "react";
import axios from 'axios';
import validator from 'validator' 
import { useNavigate } from "react-router-dom";
function Contact() {
	const [cname, setCname] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	// Handling the form submission 
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (cname == null || cname.length == 0) {
			alert("Contact Name is Empty")
		}
		else if( !(cname.match("^[A-Za-z\\s]+$")) )
			alert('Please provide valid First Name, first name should be only 15 characters');
		else if (email == null || email.length == 0) {
			alert("Email is Empty")
		}
		else if (!validateEmail(email)) {
			alert("Invalid Email")
		}
		else if (subject == null || subject.length == 0) {
			alert("Subject is Empty")
		}
		else if (message == null || message.length == 0) {
			alert("Message is Empty")
		}
		else {
			let result = await fetch(
				'http://localhost:5000/api/contact/addcontact', {
				method: "post",
				body: JSON.stringify({ cname, email, subject, message }),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			result = await result.json();
			console.warn(result);
			if (result) {
				alert("Data saved succesfully");
				setCname("")
				setEmail("")
				setMessage("")
				setSubject("")
			}
		}
	};

	return (
		<div className="form">
			<br></br><br></br><br></br><br></br><br></br>
			<center>
				<div>
					<h1>Contact Form</h1>
				</div>

				<form onSubmit={handleSubmit}>
					<table>
						<tbody>
							<tr>
								<th><br></br>
									<label className="label" style={{ color: "black" }}>Contact Name</label> </th>
								<td><br></br>
									<input
										onChange={ev => setCname(ev.target.value)}
										className="input"
										value={cname}
										type="text" maxLength={15}
										placeholder="Contact Name"
										required
									/> </td>
							</tr><tr>
								<th><br></br>
									<label className="label" style={{ color: "black" }}>Email</label> </th>
								<td><br></br>
									<input
										onChange={ev => setEmail(ev.target.value)}
										className="input"
										value={email}
										type="email"
										placeholder="Email Id"
										required title="Invalid Email Id"
									/> </td>
							</tr>
							<tr><th><br></br>
								<label className="label" style={{ color: "black" }}>Subject</label> </th>
								<td><br></br>
									<input
										onChange={ev => setSubject(ev.target.value)}
										className="input"
										value={subject}
										type="text"
										placeholder="Subject"
										required
									/> </td>
							</tr>
							<tr><th><br></br>
								<label className="label" style={{ color: "black" }}>Message</label> </th>
								<td><br></br>
									<textarea rows={5} cols={30} value={message} required
										onChange={ev => setMessage(ev.target.value)}>
									</textarea></td>
							</tr>
							<tr>
								<th colSpan={2}>
									<br></br>
									<center>
										<button type="submit">
											Submit
										</button>
									</center></th>
							</tr>
						</tbody>
					</table>
				</form>
			</center>
		</div>
	);
}


export default Contact;