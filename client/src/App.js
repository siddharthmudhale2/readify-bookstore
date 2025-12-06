import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import AdminLogin from './components/adminlogin';
import UserLogin from './components/userlogin';
import StaffLogin from './components/stafflogin';
import Contact from './components/contact';
import NewUser from './components/newuser';
import AdminAddStaff from './components/adminaddstaff';
import LogoutPage from './components/logout';
import UserViewProfile from './components/userviewprofile';
import StaffViewProfile from './components/staffviewprofile';
import UserMainPage from './components/usermainpage';
import StaffHeader from './components/staffheader';
import UserHeader from './components/userheader';
import AdminMainPage from './components/adminmainpage';
import AdminHeader from './components/adminheader';
import StaffMainPage from './components/staffmainpage';
import AdminViewUsers from './components/adminviewusers';
import AdminViewStaffs from './components/adminviewstaffs';
import AdminViewReports from './components/adminviewreports';
import AdminViewContacts from './components/adminviewcontacts';
import CommonHeader from './components/commonheader';
import HomePage from './components/homepage';
import StaffViewReports from './components/staffviewreports';
import AdminAddBook from './components/adminaddbook';
import AdminViewBooks from './components/adminviewbooks';
import UserSearchBooks from './components/usersearchbooks';
import UserSearchBook1 from './components/usersearchbook1';
import UserPaymentPage from './components/userpaymentpage';
import UserViewCart from './components/userviewcart';
import UserGallery from './components/usergallery';
function App() {
  /*
  return (
    <div className="wrapper">
      <Home/>
    </div>
  );
  */
 console.log("User Type : ", sessionStorage.getItem('usertype'))
  if(sessionStorage.getItem('usertype')==null){
    return (
      <Router>
        <CommonHeader />  
      <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/newuser" element={<NewUser />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/userlogin" element={<UserLogin />} />
                <Route path="/stafflogin" element={<StaffLogin />} />
                <Route path="/about" element={<About />} />
                </Routes>
      </Router>
     );
   }
   else if(sessionStorage.getItem('usertype')=='staff'){
    return (
         <Router>
             <StaffHeader />
             <Routes>
                <Route path="/" element={<StaffMainPage />} />
                <Route path="/staffmainpage" element={<StaffMainPage />} />
                <Route path="/staffviewprofile" element={<StaffViewProfile />} />
                <Route path="/staffviewreports" element={<StaffViewReports />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
         </Router>
     );
   }
  else if(sessionStorage.getItem('usertype')=='admin'){
    return (
         <Router>
             <AdminHeader />
             <Routes>
                <Route path="/" element={<AdminMainPage />} />
                <Route path="/adminmainpage" element={<AdminMainPage />} />
                <Route path="/adminaddbook" element={<AdminAddBook />} />
                <Route path="/adminaddstaff" element={<AdminAddStaff />} />
                <Route path="/adminviewstudents" element={<AdminViewUsers />} />
                <Route path="/adminviewstaffs" element={<AdminViewStaffs />} />
                <Route path="/adminviewbooks" element={<AdminViewBooks />} />
                <Route path="/adminviewcontacts" element={<AdminViewContacts />} />
                <Route path="/adminviewreports" element={<AdminViewReports />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
         </Router>
     );
   }
   else if(sessionStorage.getItem('usertype')=='user'){
    return (
         <Router>
             <UserHeader />
             <Routes>
                <Route path="/" element={<UserMainPage />} />
                <Route path="/usermainpage" element={<UserMainPage />} />
                <Route path="/userpaymentpage" element={<UserPaymentPage />} />
                <Route path="/userviewprofile" element={<UserViewProfile />} />
                <Route path="/userviewcart" element={<UserViewCart />} />
                <Route path="/userpaymentpage" element={<UserPaymentPage />} />
                <Route path="/usersearchbooks" element={<UserSearchBooks />} />
                <Route path="/userviewbooks" element={<UserGallery />} />                
                <Route path="/usersearchbook1" element={<UserSearchBook1 />} />                
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
         </Router>
     );
   }
}

export default App;
