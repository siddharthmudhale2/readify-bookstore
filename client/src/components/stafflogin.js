import Header from "./header";
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
function StaffLogin() {	
	const [username, setUserName] = useState(""); 
	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");
	  
	  const navigate = useNavigate();
	  const handleOnSubmit = async (e) => {
		  e.preventDefault();
		  if (username === "" || username.length==0) {
			  alert("UserName is Empty");
		  }
		 else if(password === "" || password.length==0) {
			  alert("Password is Empty");
		 }
		  else {
			  let result = await fetch(
				  'http://localhost:5000/api/staff/checkstafflogin', {
				  method: "post",
				  body: JSON.stringify({
					  username,password
				  }),
				  headers: {
					  'Content-Type': 'application/json'
				  }
			  })
			  result = await result.json();
			  console.log("Result : ", result, " Length : ", Object.keys(result).length, 
			  " Id : ", result['_id']);
			  if (result != undefined && Object.keys(result).length>0) {
				  sessionStorage.setItem("usertype", "staff")
				  sessionStorage.setItem("staffid", result['_id'])
				  console.log("Id : ",result['_id'])
				  let path = '/staffmainpage';
				  navigate(path);
				  window.location.reload(false);
			  }else{
				  //setMsg("UserName/Password is Empty");
				  alert("Invalid UserName/Password");				
			  }
		  }
	  }
  
  
  
	return (      
		  <div className="form">
			  <br></br><br></br><br></br><br></br>
		<center>
			  <div> 
				  <h1>Staff Login Form</h1> 
			  </div> 
  			  <form> 
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
								  />
							  </td>
						  </tr>
  
						  <tr><th colSpan={2}>
							  <br></br>
							  <center>
							  <button onClick={handleOnSubmit} type="submit">
								  StaffLogin
							  </button>
							  &nbsp;&nbsp;&nbsp;&nbsp;
				  <a href="/newuser">New Student</a>
				  &nbsp;&nbsp;&nbsp;&nbsp;
				  <a href="/adminlogin">Admin Login</a>
				  </center>
						  </th></tr>
					  </table>
			  </form>
		</center>  
		  </div> 
	);
} 

export default StaffLogin;