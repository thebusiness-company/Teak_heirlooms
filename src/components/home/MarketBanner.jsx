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
    <div className="relative w-full h-[405px]">
      {img && img.image ? (
        <>
          <img
            className="w-full h-full object-fill z-0"
            alt="Market Banner"
            src={`${BASEURL}${img.image}`}
          />
          <Link
            to="/shop"
            className="absolute left-10 md:left-40 bottom-16 sm:bottom-14 md:bottom-5 lg:bottom-15 xl:bottom-15 text-white text-sm sm:text-lg font-semibold bg-[#9C0300] hover:bg-red-700 transition-colors px-4 sm:px-5 py-0.5 rounded-sm shadow-lg z-50"
          >
            SHOP NOW
          </Link>
        </>
      ) : (
        <img
          className="w-full h-auto max-h-[417px] object-cover"
          alt="Market Banner"
          src={Img}
        />
      )}
    </div>
  );
};

export default MarketBanner;
