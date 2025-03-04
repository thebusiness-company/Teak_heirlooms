import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <div id="root">
      <Navbar />

      <div className="main-content">
        <Outlet/>
      </div>
    <Footer/>
    </div>

    </>
  )
}


export default MainLayout
