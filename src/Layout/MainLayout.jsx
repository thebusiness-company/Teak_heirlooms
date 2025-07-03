import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


const MainLayout = ({numCartItems}) => {
  return (
    <>
    <div id="root">
      <Navbar numCartItems={numCartItems}/>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="main-content">
        <Outlet/>
      </div>
    <Footer/>
    </div>

    </>
  )
}

MainLayout.propTypes = {
  numCartItems: PropTypes.number.isRequired,
};

export default MainLayout
