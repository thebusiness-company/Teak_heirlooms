import { useEffect, useState } from 'react';
import Img from '../../assets/images/marketbannerimg.png';
import { Link } from 'react-router-dom';
import api from '../../api';
import { BASEURL } from '../../api';

const MarketBanner = () => {
  const [img, setImg] = useState(null);

  useEffect(() => {
    api.get('homebanner/')
      .then(res => {
        console.log(res.data);
        setImg(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="relative w-full mb-6 md:mb-10">
      {img && img.image ? (
        <>
          <img
            className="w-full h-auto object-contain z-0"
            alt="Market Banner"
            src={`${BASEURL}${img.image}`}
          />
          <Link
            to="/shop"
            className="absolute left-10 md:left-40 bottom-1 sm:bottom-2 md:bottom-5 lg:bottom-10 xl:bottom-14 text-white text-xs sm:text-lg font-semibold bg-[#9C0300] hover:bg-red-700 transition-colors px-4 sm:px-5 py-0.5 rounded-sm shadow-lg z-50"
          >
            Shop Now
          </Link>
        </>
      ) : (
        <div
          className="relative "
          // w-full h-[250px] md:h-[350px] max-h-[517px] bg-center bg-no-repeat bg-cover md:bg-con overflow-x-hidden"
          // style={{ backgroundImage: `url(${Img})`}}
        >
          <img
            className="w-full h-auto object-cover md:object-left lg:object-contain"
            alt="Market Banner"
            src={Img}
          />
          <Link
            to="/shop"
            className="absolute left-10 md:left-40 bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-10 text-white text-xs md:text-lg font-semibold bg-[#9C0300] hover:bg-red-700 transition-colors px-4 sm:px-5 py-0.5 rounded-sm shadow-lg z-50"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default MarketBanner;
