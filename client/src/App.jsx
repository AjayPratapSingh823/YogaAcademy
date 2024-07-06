import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import IAmNewHere from "./components/IAmNewHere";
import ContactUs from "./components/ContactUs";
import TwoZeroTwoFour from "./components/TwoZeroTwoFour";
import Blogs from "./components/Blogs";
// Offering Classes
import KidsClass from "./components/KidsClass";
import GroupClass from "./components/GroupClass";
import PrivateClass from "./components/PrivateClass";
// User
import UserCart from "./user-components/UserCart";
import UserOptCourses from "./user-components/UserOptCourses";
import UserPayment from "./user-components/UserPayment";
import UserProfile from "./user-components/UserProfile";
// Admin
import AddingClasses from "./admin-components/AddingClasses";
import FAQs from "./admin-components/FAQs";
import Queries from "./admin-components/Queries";
import TrainerInfo from "./admin-components/TrainerInfo";
import UserInfo from "./admin-components/UserInfo";
import AdminLogin from "./auth-components/AdminLogin";
// Trainer
import TrainerBlogs from "./trainer components/TrainerBlogs";
import TrainerProfile from "./trainer components/TrainerProfile";
import TrainerLogin from "./auth-components/TrainerLogin";
// Auth
const UserLogin = React.lazy(() => import("./auth-components/UserLogin"));
import UserSignup from "./auth-components/UserSignup";
import ResetPassword from "./auth-components/ResetPassword";
import ForgotPassword from "./auth-components/ForgotPassword";
import UserDashboard from "./user-components/UserDashboard";
import Footer from "./components/Footer";
import OurMission from "./components/OurMission";
import YogaDemoVideos from "./components/YogaDemoVideos";
import Testimonials from "./components/Testimonials";
import AllGroupClasses from "./components/Classes/AllGroupClasses";
import AdminDashboard from "./admin-components/AdminDashboard";
import AdminProfile from "./admin-components/AdminProfile";
import AllTrainers from "./components/AllTrainers";
import CreateBlog from "./blog/CreateBlog";
import BecomeATrainer from "./components/BecomeATrainer";
import BlogPage from "./components/BlogPage";
import AddTrainer from "./admin-components/AddTrainer";
import DemoSession from "./components/DemoSession";
import AllkidsClasses from "./components/Classes/AllKidsClasses";
import AllPrivateClasses from "./components/Classes/AllPrivateClass";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/i-am-new-here" element={<IAmNewHere />} />
          <Route path="/all-trainers" element={<AllTrainers />} />
          <Route path="/become-a-trainer" element={<BecomeATrainer />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/two-zero-two-four" element={<TwoZeroTwoFour />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogpage" element={<BlogPage />} />
          {/* Offering Classes */}
          <Route path="/kids-classes" element={<KidsClass />} />
          <Route path="/group-classes" element={<GroupClass />} />
          <Route path="/all-group-classes" element={<AllGroupClasses />} />
          <Route path="/all-kids-classes" element={<AllkidsClasses></AllkidsClasses>}  />
          <Route path="/all-private-classes" element={<AllPrivateClasses></AllPrivateClasses>}  />
          <Route path="/private-classes" element={<PrivateClass />} />
          {/* User */}
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/user-cart" element={<UserCart />} />
          <Route path="/user-opt-courses" element={<UserOptCourses />} />
          <Route path="/user-payment" element={<UserPayment />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/add-trainer" element={<AddTrainer />} />
          {/* Admin */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/adding-classes" element={<AddingClasses />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/trainer-data" element={<TrainerInfo />} />
          <Route path="/user-data" element={<UserInfo />} />
          {/* Trainer */}
          <Route path="/trainer-login" element={<TrainerLogin/>}/>
          <Route path="/trainer-blogs" element={<TrainerBlogs />} />
          <Route path="/trainer-profile" element={<TrainerProfile />} />
          {/* Auth */}
          <Route
            path="/user-login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UserLogin />
              </Suspense>
            }
          />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          {/* Footer */}
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/yoga-demo-videos" element={<YogaDemoVideos />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/demo" element={<DemoSession />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
