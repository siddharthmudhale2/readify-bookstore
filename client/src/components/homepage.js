import React, { Component } from "react";
import Header from "./header";
class HomePage extends Component {
    render() {
        return (
            <section id="hero">
                <div id="heroCarousel" data-bs-interval={5000} className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <ol className="carousel-indicators" id="hero-carousel-indicators" />
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/Pic1.jpg)' }}>
                            <div className="carousel-container">
                                <div className="container">
                                    <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Readify</span></h2>
                                    <p className="animate__animated animate__fadeInUp">
                                    An Readify is a web application that allows customers to buy books online. Customers can search for a book by title or author using a web browser, add it to their shopping cart, and then purchase it using a debit or credit card transaction.                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/Pic2.jpg)' }}>
                            <div className="carousel-container">
                                <div className="container">
                                <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Readify</span></h2>
                                    <p className="animate__animated animate__fadeInUp">
                                    Ebooks are purchased from vendors, who provide electronic access to a book. Ebooks are usually viewed through a specific database provided by the vendor/publisher.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/Pic3.webp)' }}>
                            <div className="carousel-container">
                                <div className="container">
                                <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Readify</span></h2>
                                    <p className="animate__animated animate__fadeInUp">
                                    Online Booking means a booking originating from your own website. The Services will be integrated into your website so that a Guest visiting your website who seeks to make a reservation will be directed to Campspot to complete the booking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default HomePage;