/*
import React, { Component } from "react";

class UserHeader extends Component {

  render() {

    return (
      <header id="header" className="header d-flex align-items-center position-relative">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1>Online News Portal</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <ul>
                <li><a href="/usermainpage" className="active">Home</a></li>
                <li><a href="/userviewprofile">View Profile</a></li>
                <li><a href="/userviewnews">View News</a></li>
                <li><a href="/logout">Logout</a></li>
              </ul>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </header>
    )
  }
}

export default UserHeader;
*/
import React, { Component } from "react";

class UserHeader extends Component {
  render() {
    return (
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">
        <h1 class="logo me-auto"><a href="/">Readify</a></h1>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a href="/usermainpage" className="active">Home</a></li>
              <li><a href="/userviewprofile">View Profile</a></li>
              <li><a href="/userviewbooks">View Books</a></li>
              <li><a href="/usersearchbooks">Search Books</a></li>
              <li><a href="/userviewcart">View Cart</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    )
  }
}

export default UserHeader;