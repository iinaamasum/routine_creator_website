import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Components/Footer';
import NavBar from './Pages/Components/NavBar';
import Home from './Pages/Home/Home';
import DataCollection from './Pages/Routine_Creator/DataCollection';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-collection" element={<DataCollection />} />
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
