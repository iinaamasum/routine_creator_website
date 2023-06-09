import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Components/Footer';
import NavBar from './Pages/Components/NavBar';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import DataCollection from './Pages/Routine_Creator/DataCollection';
import Routine from './Pages/Routine_Creator/Routine';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data-collection" element={<DataCollection />} />
        <Route path="/routine" element={<Routine />} />
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
