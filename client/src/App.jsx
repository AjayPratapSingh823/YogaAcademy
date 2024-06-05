import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import IAmNewHere from './components/IAmNewHere';
import ContactUs from './components/ContactUs';
import TwoZeroTwoFour from './components/TwoZeroTwoFour';
import Blogs from './components/Blogs';
// Offering Classes
import KidsClass from './components/KidsClass';
import GroupClass from "./components/GroupClass";
import PrivateClass from './components/PrivateClass';
import YogaWorkshops from './components/YogaWorkshops';
// User
import UserCart from "./user-components/UserCart"
import UserOptCourses from "./user-components/UserOptCourses"
import UserPayment from "./user-components/UserPayment"
import UserProfile from "./user-components/UserProfile"
// Admin
import AddingClasses from "./admin-components/AddingClasses"
import FAQs from "./admin-components/FAQs"
import Queries from "./admin-components/Queries"
import TrainerInfo from "./admin-components/TrainerInfo"
import UserInfo from "./admin-components/UserInfo"
// Trainer
import TrainerBlogs from "./trainer components/TrainerBlogs"
import TrainerProfile from "./trainer components/TrainerProfile"
// Auth
import Login from './auth-components/Login';
import Signin from './auth-components/Signin';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/i-am-new-here" element={<IAmNewHere />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/two-zero-two-four" element={<TwoZeroTwoFour />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* Offering Classes */}
        <Route path="/kids-class" element={<KidsClass />} />
        <Route path="/group-class" element={<GroupClass />} />
        <Route path="/private-class" element={<PrivateClass />} />
        <Route path="/yoga-workshops" element={<YogaWorkshops />} />
        {/* User */}
        <Route path='/user-cart' element={<UserCart />} />
        <Route path='/user-opt-courses' element={<UserOptCourses />} />
        <Route path='/user-payment' element={<UserPayment />} />
        <Route path='/user-profile' element={<UserProfile />} />
        {/* Admin */}
        <Route path='/adding-classes' element={<AddingClasses />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/queries' element={<Queries />} />
        <Route path='/trainer-info' element={<TrainerInfo />} />
        <Route path='/user-info' element={<UserInfo />} />
        {/* Trainer */}
        <Route path='/trainer-blogs' element={<TrainerBlogs />} />
        <Route path='/trainer-profile' element={<TrainerProfile />} />
        {/* Auth */}
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
