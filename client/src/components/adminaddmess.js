import Header from "./header";
import React, { Component, useState } from "react";

function AdminAddMess() {
	const [mname, setMessName] = useState("");
	const [mtype, setMessType] = useState("North Indian");
	const [price, setPrice] = useState("");
	const [numofstudents, setNumberOfStudents] = useState("");
	const [details, setDetails] = useState("");
	const messtypes = ["North Indian", "South Indian", "Punjabi", "Only Veg", "Veg-NonVeg"];
	const onOptionChangeHandler = (event) => {
		setMessType(event.target.value);
		console.log(
			"User Selected Value - ",
			event.target.value
		);
	};
	const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/api/mess/add', {
            method: "post",
            body: JSON.stringify({ mname, mtype, numofstudents, details, price }),
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
					<h1>Add New Mess</h1>
				</div>
				<form encType="multipart/form-data" method="post" onSubmit={handleOnSubmit} >
					{/* Labels and inputs for form data */}
					<table>
						<tr>
							<th><br></br>
								<label className="label" style={{ color: "black" }}>Mess Name</label>
							</th>
							<td><br></br>
								<input
									onChange={ev => setMessName(ev.target.value)}
									className="input"
									value={mname}
									type="text" required
									placeholder="Mess Name"
								/> </td>
						</tr>
						<tr>
							<th><br></br>
								<label className="label" style={{ color: "black" }}>Mess Type</label>
							</th>
							<td><br></br>
							<select onChange={onOptionChangeHandler} required title="Choose an option">
									{messtypes.map((option, index) => {
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
									value={numofstudents}  required
									type="text" maxLength={3} pattern="[0-9]{1,3}"
									title="Students number should be 1 to 3"
									placeholder="Number Of Students"
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Price</label> </th>
							<td><br></br>
								<input
									onChange={ev => setPrice(ev.target.value)}
									className="input"
									value={price}  required
									type="text"maxLength={3}
									pattern="[0-9]{1,3}"
									title="Price should be 1 to 3"
									placeholder="Price"
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Details</label> </th>
							<td><br></br>
								<textarea rows={5} cols={30} value={details} required
								onChange={ev => setDetails(ev.target.value)}>
								</textarea>
							</td>
						</tr>						
						<tr><th colSpan={2}>
							<br></br>
              <center>
                <button type="submit">
                  Add New Mess
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

export default AdminAddMess;