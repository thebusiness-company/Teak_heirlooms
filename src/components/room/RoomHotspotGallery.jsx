import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Room1 from '../../assets/images/Rooms/R3.png';
import Room2 from '../../assets/images/Rooms/R2.png';
import Room3 from '../../assets/images/Rooms/R3.png';
import Room4 from '../../assets/images/Rooms/R4.png';
import Room5 from '../../assets/images/Rooms/R1.png';

const images = [
  {
    src: Room1,
    alt: 'Room 1',
    span: 'row-span-2',
    hotspots: [
      { id: 1, top: '30%', left: '20%', name: 'Wall Art', price: '1,200', slug: 'wall-art' },
      { id: 2, top: '60%', left: '35%', name: 'TV Unit', price: '7,500', slug: 'tv-unit' },
      { id: 3, top: '80%', left: '55%', name: 'Planter', price: '800', slug: 'planter' },
    ],
  },
  {
    src: Room2,
    alt: 'Room 2',
    hotspots: [
      { id: 1, top: '20%', left: '55%', name: 'Ceiling Lamp', price: '1,950', slug: 'ceiling-lamp' },
      { id: 2, top: '55%', left: '40%', name: 'Chair', price: '3,000', slug: 'Room-chair' },
      { id: 3, top: '60%', left: '70%', name: 'Cushion', price: '450', slug: 'soft-cushion' },
    ],
  },
  {
    src: Room3,
    alt: 'Room 3',
    hotspots: [
      { id: 1, top: '30%', left: '70%', name: 'Vase', price: '299', slug: 'ceramic-vase' },
      { id: 2, top: '50%', left: '60%', name: 'Candle Holder', price: '150', slug: 'candle-holder' },
    ],
  },
  {
    src: Room4,
    alt: 'Room 4',
    hotspots: [
      { id: 1, top: '50%', left: '30%', name: 'Side Table', price: '2,700', slug: 'wooden-side-table' },
    ],
  },
  {
    src: Room5,
    alt: 'Room 5',
    hotspots: [
      { id: 1, top: '60%', left: '50%', name: 'Balcony Chair', price: '4,800', slug: 'balcony-chair' },
    ],
  },
];

const RoomHotspotGallery = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="px-8 py-8 max-w-8xl mx-auto">
      <h2 className="text-3xl font-bold mb-3 px-2">Make space for dreams</h2>
      <p className="text-gray-600 mb-8 max-w-5xl px-2">
        Your bedroom is more than just a place to sleep—it`&apos;`s your personal retreat, a space for relaxation, and a canvas for your dreams. Discover endless inspiration to create a bedroom that reflects your style and meets your needs. It`&apos;`s time to turn your bedroom into the sanctuary you’ve always imagined.
      </p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column - Large Image */}
        <div className="relative md:row-span-2">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover rounded-md"
          />
          {images[0].hotspots.map((spot, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/product/${spot.slug}`)}
              onMouseEnter={() => setHovered(`0-${idx}`)}
              onMouseLeave={() => setHovered(null)}
              className="absolute w-5 h-5 bg-white border-4 border-black rounded-full cursor-pointer hover:scale-130 transition duration-200"
              style={{
                top: spot.top,
                left: spot.left,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {hovered === `0-${idx}` && (
                <div className="absolute z-10 px-2 py-1 bg-white text-sm text-black rounded shadow-md whitespace-nowrap"
                  style={{ top: '120%', left: '50%', transform: 'translateX(-50%)' }}>
                  <strong>{spot.name}</strong><br />
                  ₹{spot.price}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column - 4 Small Images (2 rows x 2 cols) */}
        <div className="md:col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
          {images.slice(1).map((img, i) => (
            <div key={i} className="relative w-full">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-md"
              />
              {img.hotspots.map((spot, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(`/product/${spot.slug}`)}
                  onMouseEnter={() => setHovered(`${i + 1}-${idx}`)}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute w-5 h-5 bg-white border-4 border-black rounded-full cursor-pointer hover:scale-130 transition duration-200"
                  style={{
                    top: spot.top,
                    left: spot.left,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {hovered === `${i + 1}-${idx}` && (
                    <div className="absolute z-10 px-2 py-1 bg-white text-sm text-black rounded shadow-md whitespace-nowrap"
                      style={{ top: '120%', left: '50%', transform: 'translateX(-50%)' }}>
                      <strong>{spot.name}</strong><br />
                      ₹{spot.price}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomHotspotGallery;
