import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#FFF] py-8 border-b-24 border-[#9C0300]">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-black py-6 w-full">
                    <div className="mb-4">
                        <a href="/page#store-locator"><h3 className="font-bold">FIND A STORE</h3></a>
                        
                        <h3 className="font-bold">BECOME A MEMBER</h3>
                        <a href="/page#feedback"><h3 className="font-bold">SEND US FEEDBACK</h3></a>

                        
            <p className="mt-12 text-xs">&copy; TBC All Rights Reserved 2024</p>

          </div>
          <div className="mb-4">
            <h3 className="font-bold">HELP</h3>
            <p>Get Help</p>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Returns</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">COMPANY</h3>
            <p>About TH</p>
            <a href="/page#news"><p>News</p></a>
            <a href="/page#sustainability"><p>Sustainability</p></a>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">CONTACT US</h3>
            <p>Teakheirlooms@gmail.com</p>
            <p>900xx25 xxx</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end w-full md:w-auto text-center md:text-right">
          <div className="flex gap-2 mb-4">
            <a href="http://instagram.com/" className="text-2xl"><FaInstagramSquare/></a>
            <a href="http://facebook.com/" className="text-2xl"><FaSquareFacebook /></a>
          </div>
          <Link to='/' className="flex items-center gap-6 mb-4">
            <img src={Logo} alt="Teak Heirlooms" className="h-6" />
          </Link>
          <Link to="/page#terms" className="text-xs">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
