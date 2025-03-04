import {  useEffect ,useState} from 'react';
import Img from '../../assets/images/marketbannerimg.png';
import { Link } from 'react-router-dom';
import api from '../../api';
import { BASEURL } from '../../api';



const MarketBanner = () => {
  const [img, setImg] = useState([]);
  useEffect(() => {
    api.get('homebanner/')
      .then(res => {
        console.log(res.data);
        setImg(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  console.log(img.image, "img.image");
  return (
    <div className="relative w-full h-auto flex justify-center items-center">
      <img
        className="w-full h-auto max-h-[417px] object-cover"
        alt="Market Banner"
        src={`${BASEURL}${img.image}`}
      />
      <Link
        to="/shop"
        className="absolute bottom-5 sm:bottom-10 md:bottom-14 lg:bottom-16 xl:bottom-20 text-white text-sm sm:text-lg font-semibold bg-[#9C0300] px-3 sm:px-5 py-2 sm:py-3 rounded-md shadow-lg"
      >
        SHOP NOW
      </Link>
    </div>
  );
};

export default MarketBanner;
