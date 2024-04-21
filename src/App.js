import "./App.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/common/Navbar"
import Contact from "./pages/Contact"
import cart from "./components/core/Dashboard/Cart/index"
import Catalog from "./pages/Catalog"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";
import { useDispatch, useSelector } from "react-redux";
import ViewCourse from "./pages/ViewCourse"
import VideoDetails from "./components/core/ViewCourse/VideoDetails"

import Settings from "./components/core/Dashboard/Settings";
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor";
import MyCourses from "./components/core/Dashboard/MyCourses";
import Cart from "./components/core/Dashboard/Cart";
import EditCourse from "./components/core/Dashboard/EditCourse";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import AddCourse from "./components/core/Dashboard/AddCourse";
import CourseDetails from "./pages/CourseDetails";
import { ACCOUNT_TYPE } from "./utils/constants";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error";



import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import OpenRoute from "./components/core/Auth/OpenRoute"
import About from "./pages/About";

function App() {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="bg-slate-950 w-screen min-h-screen flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog/:catalogName" element={<Catalog/>} />
      <Route path="courses/:courseId" element={<CourseDetails/>} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>

          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="about"
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }
        />
        <Route
          path="contact"
          element={
            <OpenRoute>
              <Contact />
            </OpenRoute>
          }
        />
        <Route element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>

        }

        >

          <Route path="dashboard/my-profile" element={<MyProfile />} />

          <Route path="dashboard/Settings" element={<Settings />} />


          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/cart" element={<Cart />} />
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
              </>
            )
          }

          {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/instructor" element={<Instructor />} />
                <Route path="dashboard/add-course" element={<AddCourse />} />
                <Route path="dashboard/my-courses" element={<MyCourses />} />
                <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />

              </>
            )
          }



        </Route>

        <Route element={
        <PrivateRoute>
          <ViewCourse />
        </PrivateRoute>
      }>

      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route 
            path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
            element={<VideoDetails />}
          />
          </>
        )
      }

      </Route>







        <Route path="+" element={<Error />} />




        {
          user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="dashboard/cart" element={<Cart />} />
              <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
            </>
          )

        }

        {
          user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              {/* <Route path="dashboard/add-course" element={<AddCourse />} /> */}
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />

            </>
          )
        }



      </Routes>

    </div>
  );
}

export default App;
