import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HotspotDot from "../room/HotspotDot";

import Room1 from "../../assets/images/Rooms/R3.png";
import Room2 from "../../assets/images/Rooms/R2.png";
import Room3 from "../../assets/images/Rooms/R3.png";
import Room4 from "../../assets/images/Rooms/R4.png";
import Room5 from "../../assets/images/Rooms/R1.png";

const images = [
  {
    src: Room1,
    alt: "Room 1",
    hotspots: [
      {
        top: "30%",
        left: "20%",
        name: "Wall Art",
        price: "1,200",
        slug: "wall-art",
      },
      {
        top: "60%",
        left: "35%",
        name: "TV Unit",
        price: "7,500",
        slug: "tv-unit",
      },
      {
        top: "80%",
        left: "55%",
        name: "Planter",
        price: "800",
        slug: "planter",
      },
    ],
  },
  {
    src: Room2,
    alt: "Room 2",
    hotspots: [
      {
        top: "20%",
        left: "55%",
        name: "Ceiling Lamp",
        price: "1,950",
        slug: "ceiling-lamp",
      },
      {
        top: "55%",
        left: "40%",
        name: "Chair",
        price: "3,000",
        slug: "Room-chair",
      },
      {
        top: "60%",
        left: "70%",
        name: "Cushion",
        price: "450",
        slug: "soft-cushion",
      },
    ],
  },
  {
    src: Room3,
    alt: "Room 3",
    hotspots: [
      {
        top: "30%",
        left: "70%",
        name: "Vase",
        price: "299",
        slug: "ceramic-vase",
      },
      {
        top: "50%",
        left: "60%",
        name: "Candle Holder",
        price: "150",
        slug: "candle-holder",
      },
    ],
  },
  {
    src: Room4,
    alt: "Room 4",
    hotspots: [
      {
        top: "50%",
        left: "30%",
        name: "Side Table",
        price: "2,700",
        slug: "wooden-side-table",
      },
    ],
  },
  {
    src: Room5,
    alt: "Room 5",
    hotspots: [
      {
        top: "60%",
        left: "50%",
        name: "Balcony Chair",
        price: "4,800",
        slug: "balcony-chair",
      },
    ],
  },
];

const RoomHotspotGallery = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="px-4 py-8 max-w-screen-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-3 px-2 font-infant">
        Make space for dreams
      </h2>
      <p className="mb-8 max-w-5xl px-2">
        Your bedroom is more than just a place to sleep—it&apos;s your personal
        retreat, a space for relaxation, and a canvas for your dreams. Discover
        endless inspiration to create a bedroom that reflects your style and
        meets your needs. It&apos;s time to turn your bedroom into the sanctuary
        you’ve always imagined.
      </p>

      {/* Mobile View */}
      <div className="md:hidden grid grid-cols-1 gap-8 mb-6">
        <div className="relative h-full w-full ">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover"
          />
          {images[0].hotspots.map((spot, idx) => (
            <HotspotDot
              key={idx}
              {...spot}
              hoverKey={`0-${idx}`}
              hovered={hovered}
              setHovered={setHovered}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
      <div className="md:hidden grid grid-cols-2 grid-rows-2 gap-4">
        {images.slice(1).map((img, i) => (
          <div key={i} className="relative w-full h-[200px]">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
            {img.hotspots.map((spot, idx) => (
              <HotspotDot
                key={idx}
                {...spot}
                hoverKey={`${i + 1}-${idx}`}
                hovered={hovered}
                setHovered={setHovered}
                navigate={navigate}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-row gap-4 mt-8">
        {/* Left Column - Room 1 */}
        <div className="relative w-1/2 h-[600px]">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover"
          />
          {images[0].hotspots.map((spot, idx) => (
            <HotspotDot
              key={idx}
              {...spot}
              hoverKey={`0-${idx}`}
              hovered={hovered}
              setHovered={setHovered}
              navigate={navigate}
            />
          ))}
        </div>

        {/* Right Column with 2columns */}
        <div className="flex flex-row gap-4 w-2/3 h-[600px]">
          {/* 1st column: Room 2 (60%) + Room 4 (40%) */}
          <div className="flex flex-col gap-4 h-full w-1/2">
            {/* Room 2 */}
            <div className="relative h-[60%] w-full">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-full object-cover"
              />
              {images[1].hotspots.map((spot, idx) => (
                <HotspotDot
                  key={idx}
                  {...spot}
                  hoverKey={`1-${idx}`}
                  hovered={hovered}
                  setHovered={setHovered}
                  navigate={navigate}
                />
              ))}
            </div>
            {/* Room 4 */}
            <div className="relative h-[40%] w-full lg:pb-4">
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="w-full h-full object-cover"
              />
              {images[3].hotspots.map((spot, idx) => (
                <HotspotDot
                  key={idx}
                  {...spot}
                  hoverKey={`3-${idx}`}
                  hovered={hovered}
                  setHovered={setHovered}
                  navigate={navigate}
                />
              ))}
            </div>
          </div>

          {/* 2nd Column: Room 3 (40%) + Room 5 (60%) */}
          <div className="flex flex-col gap-4 h-full w-1/2">
            {/* Room 3 */}
            <div className="relative h-[40%] w-full">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-full object-cover"
              />
              {images[2].hotspots.map((spot, idx) => (
                <HotspotDot
                  key={idx}
                  {...spot}
                  hoverKey={`2-${idx}`}
                  hovered={hovered}
                  setHovered={setHovered}
                  navigate={navigate}
                />
              ))}
            </div>
            {/* Room 5 */}
            <div className="relative h-[60%] w-full">
              <img
                src={images[4].src}
                alt={images[4].alt}
                className="w-full h-full object-cover"
              />
              {images[4].hotspots.map((spot, idx) => (
                <HotspotDot
                  key={idx}
                  {...spot}
                  hoverKey={`4-${idx}`}
                  hovered={hovered}
                  setHovered={setHovered}
                  navigate={navigate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomHotspotGallery;
