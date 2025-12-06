import Header from "./header";
import React, { Component, useState } from "react";


function AdminAddStaff() {
	const [fname, setFirstName] = useState("");
	const [lname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phnum, setPhoneNum] = useState("");
	const [address, setAddress] = useState("");
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [photo, setPhoto] = useState("");

	const handleFileSelect = (event) => {
        setPhoto(event.target.files[0])
    }

	const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/api/newstaff/add', {
            method: "post",
            body: JSON.stringify({ fname, lname, email, phnum, username, 
				password, address }),
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
        }
    }
	
	return (
		<div className="form">
			<br></br><br></br><br></br><br></br><br></br><br></br>
			<center>
				<div>
					<h1>New Staff Form</h1>
				</div>
				<form encType="multipart/form-data" method="post">
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
									type="text"
									placeholder="First Name"
								/> </td>
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
									type="text"
									placeholder="Last Name"
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
									placeholder="Email Id"
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Phone Num</label> </th>
							<td><br></br>
								<input
									onChange={ev => setPhoneNum(ev.target.value)}
									className="input"
									value={phnum} maxLength={10}
									type="text"
									placeholder="Phone Num"
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
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Address</label> </th>
							<td><br></br>
								<textarea rows={5} cols={30} value={address} 
								onChange={ev => setAddress(ev.target.value)}>
								</textarea>
							</td>
						</tr>						
						<tr><th colSpan={2}>
							<br></br>
              <center>
                <button onClick={handleOnSubmit} type="submit">
                  Add New Staff
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

export default AdminAddStaff;