import Header from "./header";
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
	const [msg, setMsg] = useState("");
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	// Handling the form submission 
	const handleSubmit = (e) => {
		console.log("Hi")
		e.preventDefault();		
		if (username === "" || password === "") {
			setMsg("UserName/Password is Empty");
		} else {
			if (username === "admin" && password === "admin") {
				sessionStorage.setItem("usertype", "admin")
				let path = '/';
				navigate(path);
				window.location.reload(false);
			} else {
				setMsg("Invalid UserName/Password");
			}
		}
	};

	return (
		<div className="form">
			<br></br><br></br><br></br><br></br>
			<center>
				<div>
					<h1>Admin Login Form</h1>
				</div>
				<form onSubmit={handleSubmit} >
					<table>
						<tr>
							<th colSpan={2}>{msg}</th>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>User Name</label> </th>
							<td><br></br>
								<input
									className="input"
									value={username}
									type="text" onChange={ev => setUserName(ev.target.value)}
									placeholder="User Name"
									required
								/>
							</td>
						</tr>
						<tr><th>
						<br></br>
							<label className="label" style={{ color: "black" }}>Password</label> </th>
							<td>
							<br></br>
								<input
									className="input"
									value={password}
									type="password" onChange={ev => setPassword(ev.target.value)}
									placeholder="Password"
									required
								/>
							</td>
						</tr>

						<tr><th colSpan={2}>
							<br></br>
							<center>
							<button type="submit">
								AdminLogin
							</button>
							&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/newuser">New User</a>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="/userlogin">User Login</a>
				</center>
						</th></tr>
					</table>
				</form>
			</center>
		</div>
	);
}

export default AdminLogin;