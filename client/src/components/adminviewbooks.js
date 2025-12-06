import { imagefrombuffer } from "imagefrombuffer"; //first import 
import React, { Component, useState, useEffect } from "react";

function AdminViewBooks() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/newbook/get')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error("Error fetching data: ", err));
    }, []);
    return (
        <div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>
                <center> Admin View Books Page </center>
            </h2>
            <p>
                <table style={{ width: '90%', left: '10px', position: 'absolute', border: '1px solid black' }}>
                    <tr style={{ width: '800px', border: '1px solid black', fontSize: '20px' }}>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Book Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Book Type</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Number of Books</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Details</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Price</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Date</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Image</th>
                    </tr>
                    {data.map(x => (
                        <tr style={{ width: '800px', fontSize: '20px' }}>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.bname}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.btype}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.quantity}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.details}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.price}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.date}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black', margin:'15px' }}>
                            <img src={imagefrombuffer({type: x.image?.contentType,data: x.image?.data?.data,})} 
                            width={200} height={150}
      />
                            </td> 
                        </tr>
                    ))}
                </table>
            </p>
        </div>
    );
}
export default AdminViewBooks;