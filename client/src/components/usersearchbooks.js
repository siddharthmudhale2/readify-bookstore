import { imagefrombuffer } from "imagefrombuffer"; //first import 
import React, { Component, useState, useEffect } from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function UserSearchBooks() {
	const [searchtext, setSearchName] = useState("");
	const [msg, setMsg] = useState("");
	const [data, setData] = useState([]);
	const navigate = useNavigate();


    useEffect(() => {
        fetch('http://localhost:5000/api/newbook/get')
            .then(response => response.json())
            .then(data => {
                setData(data)
                console.log("Data : ", data)
            }
            ).catch(err => console.error("Error fetching data: ", err));
    }, []);

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		//GetData()
		if (searchtext === "") {
			setMsg("Book Name is Empty");
		}
		else {
			const res = await axios.get('http://localhost:5000/api/newbook/searchbook/' + searchtext)
			console.log("Result : ",res.data)
			setData(res.data)
			console.log("Data : ",data, " Length : ", data.length)
			setMsg("")
			if(res.data.length==0)
				setMsg("Sorry Data Not Found")
		}
	}
    const handleClick = (id, bname, btype, quantity, price, details) => async (e) => {
        sessionStorage.setItem("bookid", id)
		sessionStorage.setItem("bname", bname)
		sessionStorage.setItem("btype", btype)
		sessionStorage.setItem("quantity", quantity)
		sessionStorage.setItem("price", price)
		sessionStorage.setItem("details", details)
        console.log("Selected Book")
        //alert("Update Function")
        let path = '/usersearchbook1';
        navigate(path);
        window.location.reload(false);        
    };
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
					<h1>User Search Book Page</h1>
				</div>
				<form>
					<table>
						<tr>
							<th colSpan={2}>{msg}</th>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Book Name</label> </th>
							<td><br></br>&nbsp;&nbsp;&nbsp;&nbsp;
								<input
									className="input"
									value={searchtext}
									type="text" onChange={ev => setSearchName(ev.target.value)}
									placeholder="Book Name"
									required
								/>
							</td>
						</tr>
						<tr><th colSpan={2}>
							<br></br>
							<center>
								<button onClick={handleOnSubmit} type="submit">
									User Search
								</button>
							</center>
						</th></tr>
					</table>
				</form>
			</center>
			<main className="main">
				<section id="services" class="services section">
					<div class="content">
						<div class="container">
							<div class="row g-0">
								{data.map(x => (
									<div class="col-lg-3 col-md-6" style={{ margin: '25px', border:'1px solid black', paddingLeft:'10px' }}>
										<div class="service-item">
											<div class="service-item-content">
												<h3 class="service-heading">
													Book Name : {x.bname}
												</h3>
												<h4>
													Book Type : {x.btype}
												</h4>
												<h4>
													Quantity : {x.quantity}
												</h4>
												<h4>
													Price : {x.price}
												</h4>
												<h4>
													Details : {x.details}
												</h4>
												<h4>
												<img src={imagefrombuffer({type: x.image?.contentType,data: x.image?.data?.data,})} 
                            width={200} height={150}/>
												</h4>
												<h4>
												{/* <a href={x.weblink} style={{textDecoration:"underline",color:'red'}}>Add To Cart</a> */}
												<button style={{ height: '50px', width: '200px' }}
                                    onClick={handleClick(x._id,x.bname, x.btype, x.quantity, x.price, x.details)}>Add To Cart</button>
												</h4>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default UserSearchBooks;