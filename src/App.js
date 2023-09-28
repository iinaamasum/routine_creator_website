import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Components/Footer';
import NavBar from './Pages/Components/NavBar';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import CourseInfo from './Pages/Routine_Creator/CourseInfo';
import Routine from './Pages/Routine_Creator/Routine';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import RequireAuth from './Pages/auth/RequireAuth';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/course-info"
          element={
            <RequireAuth>
              <CourseInfo />
            </RequireAuth>
          }
        />
        <Route path="/routine">
          <Route
            path=":course_id"
            element={
              <RequireAuth>
                <Routine />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
      <Footer />
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 1500,
        }}
      />
    </>
  );
}

export default App;
