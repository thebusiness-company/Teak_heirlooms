import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import roombanner from '../../assets/images/roombanner.png';

const HotspotRoom = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const handleRedirect = (slug) => {
    navigate(`/product/${slug}`);
  };

  const hotspots = [
    {
      id: 1,
      top: '20%',
      left: '12%',
      slug: 'ycvuibiohhuu',
      name: 'Wall Hood',
      price: '4,500',
    },
    {
      id: 2,
      top: '64%',
      left: '33%',
      slug: 'uhgh',
      name: 'Dining Chair',
      price: '2,990',
    },
    {
      id: 3,
      top: '35%',
      left: '65%',
      slug: 'sfihgsfoigj-oigiwrgfsihgfo-ugvgfvsohhfshffj-dyhgety',
      name: 'Ceiling Light',
      price: '3,200',
    },
    {
      id: 4,
      top: '60%',
      left: '82%',
      slug: 'rueg99gh',
      name: 'Sofa',
      price: '19,999',
    },
    {
      id: 5,
      top: '42%',
      left: '90%',
      slug: 'igyguij',
      name: 'Decor Leaf',
      price: '1,299',
    },
  ];

  return (
    <div className="relative w-full">
      <img
        src={roombanner}
        alt="Room"
        className="w-full h-auto object-cover"
      />
      {hotspots.map((spot) => (
        <div
          key={spot.id}
          className="absolute"
          style={{ top: spot.top, left: spot.left, transform: 'translate(-50%, -50%)' }}
        >
          <div
            onClick={() => handleRedirect(spot.slug)}
            onMouseEnter={() => setHovered(spot.id)}
            onMouseLeave={() => setHovered(null)}
            className="w-5 h-5 bg-white border-4 border-black rounded-full cursor-pointer hover:scale-130 transition-transform duration-200"
          ></div>
          {hovered === spot.id && (
            <div className="absolute z-10 px-3 py-2 bg-white border border-gray-300 rounded shadow-md whitespace-nowrap text-sm"
              style={{ top: '120%', left: '50%', transform: 'translateX(-50%)' }}
            >
              <strong>{spot.name}</strong><br />
              Rs. {spot.price}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HotspotRoom;
