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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-sm text-black py-6 w-full">
                    <div className="mb-4">
                        <button onClick={()=>handleScroll("storeRef")} className='block w-full text-left'><h3 className="font-bold cursor-pointer mb-2 tracking-wide">FIND A STORE</h3></button>
                        
                        <h3 className="font-bold mb-2 tracking-wide">BECOME A MEMBER</h3>
                        <button onClick={()=>handleScroll("feedbackRef")} className='block w-full text-left'><h3 className="font-bold cursor-pointer mb-2 tracking-wide">SEND YOUR FEEDBACK</h3></button>

                        
            <p className="mt-12 text-xs">&copy; TBC All Rights Reserved 2024</p>

          </div>
          <div className="mb-4 tracking-wide">
            <h3 className="font-bold mb-2">HELP</h3>
            <p className='mb-2'>Get Help</p>
            <p  className='mb-2'>Order Status</p>
            <p  className='mb-2'>Delivery</p>
            <p  className='mb-2'>Returns</p>
          </div>
          <div className="mb-4 tracking-wide">
            <h3 className="font-bold mb-2">COMPANY</h3>

            {/* using Link */}
            {/* <Link to="/page#aboutus"><p>About TH</p></Link>
            <Link to="/page#news"><p>News</p></Link>
            <Link to="/page#sustainability"><p>Sustainability</p></Link> */}

            {/* using href */}
            <button onClick={()=>handleScroll("aboutusRef")}><p className='cursor-pointer mb-2'>About TH</p></button><br />
           <button onClick={()=>handleScroll("newsRef")}><p className='cursor-pointer mb-2'>News</p></button><br />
            <button onClick={()=>handleScroll("sustainabilityRef")}><p className='cursor-pointer mb-2'>Sustainability</p></button>
          </div>
          <div className="mb-4 tracking-wide">
            <h3 className="font-bold mb-2">CONTACT US</h3>
            <p className='mb-2 break-words'>Teakheirlooms@gmail.com</p>
            <p>900xx25 xxx</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end w-full md:w-auto text-center md:text-right">
          <div className="flex gap-2 mb-4">
            <a href="http://instagram.com/" className="text-2xl"><FaInstagramSquare/></a>
            <a href="http://facebook.com/" className="text-2xl"><FaSquareFacebook /></a>
          </div>
          <Link to='/' className="flex items-center gap-6 mb-4  px-2  lg:mt-8">
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
