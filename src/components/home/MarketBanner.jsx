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
    <div className="relative w-full h-auto flex justify-center items-center">
      {img && img.image ? (
        <>
          <img
            className="w-full h-auto max-h-[417px] object-cover"
            alt="Market Banner"
            src={`${BASEURL}${img.image}`}
          />
          <Link
            to="/shop"
            className="absolute left-40 bottom-2 sm:bottom-14 md:bottom-5 lg:bottom-15 xl:bottom-15 text-white text-sm sm:text-lg font-semibold bg-[#9C0300] px-4 sm:px-5 py-1 sm:py-3 rounded-full shadow-lg"
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
