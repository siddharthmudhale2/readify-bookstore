import React, { Component, useState, useEffect } from "react";

function AdminViewReports() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/newcart/get')
            .then(response => response.json())
            .then(data => {
                setData(data)
                console.log("Data : ", data)
            }
            ).catch(err => console.error("Error fetching data: ", err));
    }, []);
    return (
        <div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>
                <center> Add View Add To Cart Page </center>
            </h2>
            <p>
                <table style={{ width: '90%', left: '50px', position: 'absolute', border: '1px solid black' }}>
                    <tr style={{ width: '800px', border: '1px solid black', fontSize: '20px' }}>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Book Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Book Type</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Quantity</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Price</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Total</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Payment Status</th>
                    </tr>
                    {data.map(x => (
                        <tr style={{ width: '800px', fontSize: '20px' }}>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.bname}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.btype}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.quantity}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.price}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.total}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.paymentstatus}</td>
                        </tr>
                    ))}                    
                </table>
            </p>
        </div>
    );
}
export default AdminViewReports;