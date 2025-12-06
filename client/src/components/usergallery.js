import { imagefrombuffer } from "imagefrombuffer"; //first import 
import React, { Component, useState, useEffect } from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function UserGallery() {
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


  return (

    <div>

      <main className="main">

        <section id="recent-posts" className="recent-posts section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Gallery</h2>
          </div>

          <div class="container">
							<div class="row g-0">
								{data.map(x => (
									<div class="col-lg-3 col-md-6" style={{ margin: '5px', border:'0px solid black', paddingLeft:'5px' }}>
										<div class="service-item">
											<div class="service-item-content">												
												<h4>
												<img src={imagefrombuffer({type: x.image?.contentType,data: x.image?.data?.data,})} 
                            	width={300} height={250}/>
												</h4>												
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

          {/* <div className="container">
            <table cellPadding={20} cellSpacing={20}>
              <tr>
                <th>
                  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fc-programming.html&psig=AOvVaw22ZOyJ1RELPQRr0XwLnH8p&ust=1727447748748000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLj97r3q4IgDFQAAAAAdAAAAABAE
                </th>
                <th>
                  <img src="assets/img/Pic2.jpg" alt width={400} height={300} />
                </th>
                <th>
                  <img src="assets/img/Pic3.webp" alt width={400} height={300} />
                </th>
              </tr>
              <tr>
                <th>
                  <img src="assets/img/Pic4.jpg" alt width={400} height={300} />
                </th>
                <th>
                  <img src="assets/img/Pic5.jpg" alt width={400} height={300} />
                </th>
                <th>
                  <img src="assets/img/Pic6.jpg" alt width={400} height={300} />
                </th>
              </tr>
              <tr>
                <th>
                  <img src="assets/img/Pic7.jpg" alt width={400} height={300} />
                </th>
                <th>
                  <img src="assets/img/Pic8.webp" alt width={400} height={300} />
                </th>
                <th>
                  <img src="assets/img/Pic9.jpg" alt width={400} height={300} />
                </th>
              </tr>
            </table>
          </div> */}

        </section>

      </main>
    </div>
  )
}
export default UserGallery;