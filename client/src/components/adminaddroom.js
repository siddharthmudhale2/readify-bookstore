import Header from "./header";
import React, { Component, useState } from "react";


function AdminAddRoom() {
	const [rname, setRoomName] = useState("");
	const [rtype, setRoomType] = useState("One Student");
	const [price, setPrice] = useState("");
	const [numofstudents, setNumberOfStudents] = useState("");
	const [details, setDetails] = useState("");
	const roomtypes = ["One Student", "Two Students", "Three Students", "More"];
	const onOptionChangeHandler = (event) => {
		setRoomType(event.target.value);
		console.log(
			"User Selected Value - ",
			event.target.value
		);
	};
	const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/api/room/add', {
            method: "post",
            body: JSON.stringify({ rname, rtype, numofstudents, details, price }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
        }
    }
	
	return (
		<div className="form">
			<br></br><br></br><br></br><br></br>
			<center>
				<div>
					<br></br><br></br>
					<h1>Add New Room</h1>
				</div>
				<form encType="multipart/form-data" method="post" onSubmit={handleOnSubmit}>
					{/* Labels and inputs for form data */}
					<table>
						<tr>
							<th><br></br>
								<label className="label" style={{ color: "black" }}>Room Name</label>
							</th>
							<td><br></br>
								<input
									onChange={ev => setRoomName(ev.target.value)}
									className="input"
									value={rname} required
									type="text" maxLength={15}
									title="Room Name should be between 1 to 15 characters"
									placeholder="Room Name"
								/> </td>
						</tr>
						<tr>
							<th><br></br>
								<label className="label" style={{ color: "black" }}>Room Type</label>
							</th>
							<td><br></br>
							<select onChange={onOptionChangeHandler}>							
									{roomtypes.map((option, index) => {
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
							<label className="label" style={{ color: "black" }}>Number Of Students</label> </th>
							<td><br></br>
								<input
									onChange={ev => setNumberOfStudents(ev.target.value)}
									className="input"
									value={numofstudents}  maxLength={3}
									pattern="[0-9]{1,3}" required
									title="Students number should be 1 to 3"
									placeholder="Number Of Students"
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
									value={price}  maxLength={3}
									type="text" required
									pattern="[0-9]{1,3}"
									title="Price should be 1 to 3"
									placeholder="Price"
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
                  Add New Room
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

export default AdminAddRoom;