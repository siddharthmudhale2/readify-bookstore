import Header from "./header";
import React, { Component, useState } from "react";
import axios from 'axios';
import { validate as validateEmail } from 'email-validator';
function NewUser() {
	const [fname, setFirstName] = useState("");
	const [lname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phnum, setPhoneNum] = useState("");
	const [address, setAddress] = useState("");
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [fathername, setFatherName] = useState("");
	const [mothername, setMotherName] = useState("");
	const [parentphnum, setParentPhNum] = useState("");
	const [parentaddress, setParentAddress] = useState("");
	const [photo, setPhoto] = useState("");

	const handleFileSelect = (event) => {
		setPhoto(event.target.files[0])
	}

	const handleOnSubmit = async (e) => {
		e.preventDefault();		
		if(fname==null || fname.length==0)
			alert("First Name is Empty")
		else if( !(fname.match("^[A-Za-z\\s]+$")) )
			alert('Please provide valid First Name, first name should be only 15 characters');
		else if(lname==null || lname.length==0)
			alert("Last Name is Empty")
		else if( !(lname.match("^[A-Za-z\\s]+$")) )
			alert('Please provide valid Last Name, last name should be only 15 characters');
		else if (email == null || email.length == 0)
			alert("Email is Empty")		
		else if (!validateEmail(email))
			alert("Invalid Email")
		else if (phnum == null || phnum.length == 0)
			alert("Phone Number is Empty")				
		else if( !(phnum.match('[6789][0-9]{9}')) )
			alert('Please provide valid phone number, Ph Num should starts with 6,7,8,9 & should be 10 digits');
		else if(username==null || username.length==0)
			alert("User Name is Empty")
		else if(password==null || password.length==0)
			alert("Password is Empty")
		else if(fathername==null || fathername.length==0)
			alert("Father Name is Empty")
		else if(mothername==null || mothername.length==0)
			alert("Mother Name is Empty")
		else if (phnum == null || phnum.length == 0)
			alert("Parent Phone Number is Empty")				
		else if( !(phnum.match('[6789][0-9]{9}')) )
			alert('Please provide valid parent phone number, Ph Num should starts with 6,7,8,9 & should be 10 digits');
		else{
		let roomallocated = "No"
		let messallocated = "No"
		let result = await fetch(
			'http://localhost:5000/api/newuser/add', {
			method: "post",
			body: JSON.stringify({
				fname, lname, email, phnum, username,
				password, address, fathername, mothername, parentphnum, parentaddress,
				roomallocated, messallocated
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setFirstName("");
			setAddress("");
			setLastName("")
			setMotherName("")
			setParentAddress("")
			setParentPhNum("")
			setPhoneNum("")
			setUserName("")			
		}
	}
	}
	const myStyle = {
		backgroundImage:
			"url('https://t4.ftcdn.net/jpg/02/10/45/95/360_F_210459536_XmLDEcKq2DpeNLVmheuWeu9NM9aGKnih.jpg')",
		height: "120vh",
		marginTop: "-70px",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};
	return (
		<div className="form" style={myStyle}>
			<br></br><br></br><br></br><br></br>
			<center>
				<div>
					<h1>New Registration Form</h1>
				</div>

				{/* Calling to the methods */}
				<div className="messages">
					{/* {errorMessage()} 
				{successMessage()}  */}
				</div>

				<form encType="multipart/form-data" method="post" onSubmit={handleOnSubmit}>
					{/* Labels and inputs for form data */}
					<table>
						<tr>
							<th><br></br>
								<label className="label" style={{ color: "black" }}>First Name</label>
							</th>
							<td><br></br>
								<input
									onChange={ev => setFirstName(ev.target.value)}
									className="input"
									value={fname}
									type="text" maxLength={15}
									placeholder="First Name" required
									pattern="^[A-Za-z\\s]+$"
									title="First Name should be 15 characters"
								/> </td>
								<th><br></br>
							<label className="label" style={{ color: "black" }}>Father Name</label> </th>
							<td><br></br>
								<input
									onChange={ev => setFatherName(ev.target.value)}
									className="input"
									value={fathername}
									type="text" required maxLength={10}
									placeholder="Father Name"
									pattern="^[A-Za-z\\s]+$"
									title="Father Name should be 15 characters"
								/>
							</td>
						</tr>
						<tr>
							<th><br></br>
								<label className="label" style={{ color: "black" }}>Last Name</label>
							</th>
							<td><br></br>
								<input
									onChange={ev => setLastName(ev.target.value)}
									className="input"
									value={lname}
									type="text" maxLength={15}
									pattern="^[A-Za-z\\s]+$"
									title="Last Name should be 15 characters"
									placeholder="Last Name" required
								/>
							</td>
							
							<th><br></br>
							<label className="label" style={{ color: "black" }}>Mother Name</label> </th>
							<td><br></br>
								<input
									onChange={ev => setMotherName(ev.target.value)}
									className="input"
									value={mothername}
									type="text" required maxLength={10}
									placeholder="Mother Name"
									pattern="^[A-Za-z\\s]+$"
									title="Mother Name should be 15 characters"
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Email</label> </th>
							<td><br></br>
								<input
									onChange={ev => setEmail(ev.target.value)}
									className="input"
									value={email}
									type="email"
									placeholder="Email Id" required
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Phone Num</label> </th>
							<td><br></br>
								<input
									onChange={ev => setPhoneNum(ev.target.value)}
									className="input"
									value={phnum}
									type="text" maxLength={10}
									placeholder="Phone Num"
									pattern="[6789][0-9]{9}"
									title="Please provide valid phone number, Ph Num should starts with 6,7,8,9 & should be 10 digits"
								/>
							</td>
							<th><br></br>
							<label className="label" style={{ color: "black" }}>Parent Phone Num</label> </th>
							<td><br></br>
								<input
									onChange={ev => setParentPhNum(ev.target.value)}
									className="input"
									value={parentphnum}
									type="text" required maxLength={10}
									placeholder="Phone Num"
									pattern="[6789][0-9]{9}"
									title="Please provide valid parent phone number, Ph Num should starts with 6,7,8,9 & should be 10 digits"
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>User Name</label> </th>
							<td><br></br>
								<input
									onChange={ev => setUserName(ev.target.value)}
									className="input"
									value={username}
									type="text"
									placeholder="User Name"
									required maxLength={15}
									title="User Name should be 15 characters"
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Password</label> </th>
							<td><br></br>
								<input
									onChange={ev => setPassword(ev.target.value)}
									className="input"
									value={password}
									type="password"
									placeholder="Password"
									maxLength={15}
									title="Password should be 15 characters"
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Address</label> </th>
							<td><br></br>
								<textarea rows={5} cols={30} value={address}
									onChange={ev => setAddress(ev.target.value)} required>
								</textarea>
							</td>
							<th><br></br>
							<label className="label" style={{ color: "black" }}>Parent Address</label> </th>
							<td><br></br>
								<textarea rows={5} cols={30} value={parentaddress}
									onChange={ev => setParentAddress(ev.target.value)}>
								</textarea>
							</td>	
						</tr>					
						{/* <tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Image Upload</label> </th>
							<td><br></br>
								<input
									className="input"
									type="file"
									placeholder="Photo"
									onChange={handleFileSelect}
								/>
							</td>
						</tr> */}
						{/* <tr><th colSpan={2}>
							<button className="btn" type="submit"
							onClick={handleSubmit}>
								New User
							</button>
						</th></tr>
						<tr>
							<th colSpan={2}>
							<button type="submit"
                onClick={handleOnSubmit}>submit</button>
							</th>
						</tr> */}
						<tr><th colSpan={2}>
							<br></br>
							<center>
								<button type="submit">
									New User
								</button>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="/adminlogin">Admin Login</a>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="/userlogin">User Login</a>
							</center>
						</th>
						</tr>
					</table>
				</form>
			</center>
		</div>
	);
}

export default NewUser;