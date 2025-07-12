import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { useScroll } from '../../context/ScrollContext';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  const handleScroll = (refKey) => {
    console.log("footer clicked");
    navigate("/page", {state: {scrollTo:refKey}});
  };

    return (
        <footer className="bg-[#FFF] py-8 border-b-24 border-[#9C0300]">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-black py-6 w-full">
                    <div className="mb-4">
                        <button onClick={()=>handleScroll("storeRef")}><h3 className="font-bold cursor-pointer">FIND A STORE</h3></button>
                        
                        <h3 className="font-bold">BECOME A MEMBER</h3>
                        <button onClick={()=>handleScroll("feedbackRef")}><h3 className="font-bold cursor-pointer">SEND YOUR FEEDBACK</h3></button>

                        
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

            {/* using Link */}
            {/* <Link to="/page#aboutus"><p>About TH</p></Link>
            <Link to="/page#news"><p>News</p></Link>
            <Link to="/page#sustainability"><p>Sustainability</p></Link> */}

            {/* using href */}
            <button onClick={()=>handleScroll("aboutusRef")}><p className='cursor-pointer'>About TH</p></button><br />
           <button onClick={()=>handleScroll("newsRef")}><p className='cursor-pointer'>News</p></button><br />
            <button onClick={()=>handleScroll("sustainabilityRef")}><p className='cursor-pointer'>Sustainability</p></button>
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
          <Link to='/' className="flex items-center gap-6 mb-4 lg:mt-8">
            <img src={Logo} alt="Teak Heirlooms" className="h-6 lg:h-10" />
          </Link>
          {/* <Link to="/page#terms" className="text-xs">Terms & Conditions</Link> */}
          {/* <a href="/page#terms" className='text-xs'>Terms & Conditions</a> */}
          <button className='text-xs' onClick={()=>handleScroll("termsRef")}><p className='cursor-pointer'>Terms & Conditions</p></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
