import N1 from '../assets/images/news-1.webp';
import N2 from '../assets/images/news-2.webp';
import N3 from '../assets/images/news-3.webp';
import NB from '../assets/images/news-4.webp';

const NewsSection = () => {
  return (
    <div className="w-full max-w-[90%] mx-auto px-4 pt-10 pb-4 overflow-x-hidden">
      <h2 className="text-3xl lg:text-4xl 2xl:text-[55px] font-semibold text-center mb-8 lg:mb-10 text-[#3B493F]">
        NEWS
      </h2>

      <div className="space-y-12 2xl:space-y-24">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1fr] xl:grid-cols-[1fr_1.5fr_1fr] md:gap-6 lg:gap-12 xl:gap-18 items-start">
          {/* Column 1 */}
          <div>
            <h3 className="text-[#9C0300] font-semibold text-lg md:text-xl lg:text-2xl 2xl:text-4xl mb-2 xl:mb-6 2xl:mb-8 leading-snug">
              Design, Heritage & Craft
            </h3>
            <p className="text-sm md:text-base 2xl:text-lg">
              The Heritage Series showcases hand-finished, numbered teak
              furniture crafted from reclaimed, certified wood aged over 30
              years. Featuring a triangular coffee table with rounded edges and
              log legs, the design blends vernacular inspiration with
              contemporary minimalism and artisan authenticity.
            </p>
          </div>

          {/* Image in middle */}
          <div className="my-6 md:mb-0 h-48 md:h-56 lg:h-62 2xl:h-90">
            <img
              src={N1}
              loading="lazy"
              alt="Yuyu Double teak seating with two U-shaped pieces"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[#9C0300] font-semibold text-lg md:text-xl lg:text-2xl 2xl:text-4xl mb-2 xl:mb-6 2xl:mb-8 leading-snug">
              Auction & Showroom
            </h3>
            <p className="text-sm md:text-base 2xl:text-lg">
              TeakHeirlooms’ Heritage collection will be displayed at its
              Chennai showroom from December 1–7. The Bengaluru auction, held in
              hybrid mode, invites in-person and online bidders, with reserve
              prices ranging from ₹2 lakh to ₹5 lakh for select pieces.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] md:gap-6 lg:gap-14 xl:gap-18 items-start">
          {/* Left image */}
          <div className="mb-6 md:mb-0 aspect-square w-full max-h-65 2xl:max-h-75 overflow-hidden">
            <img
              src={N2}
              loading="lazy"
              alt="Root Bench outdoor teak seating"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text center */}
          <div>
            <h3 className="text-[#9C0300] font-semibold text-lg md:text-xl lg:text-2xl 2xl:text-4xl mb-2 xl:mb-6 2xl:mb-8 w-full lg:max-w-[70%]">
              Brand Positioning & Market
            </h3>
            <p className="text-sm md:text-base 2xl:text-lg">
              TeakHeirlooms positions its Heritage Series as collectible art,
              blending utility and design. Emphasising craftsmanship and
              authenticity, the brand aims to create heirloom pieces, tapping
              into rising demand for limited editions, provenance, and
              meaningful design narratives in India’s premium market.
            </p>
          </div>

          {/* Right image */}
          <div className="flex justify-end mt-6 md:mt-0 aspect-square w-full max-h-65 2xl:max-h-75 overflow-hidden">
            <img
              src={N3}
              loading="lazy"
              alt="Leafy ancient-style teak wall panel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Third Row - Full width text */}
        <div>
          <h3 className="text-[#9C0300] font-semibold text-lg md:text-xl lg:text-2xl 2xl:text-4xl mb-2 xl:mb-6 2xl:mb-8">
            Ethical / Legal Concerns & Heritage Protection
          </h3>
          <p className="text-sm md:text-base 2xl:text-lg">
            TeakHeirlooms ensures all wood is legally sourced, though
            sustainability of reclaimed timber remains a concern.
          </p>

          {/* Fourth Row - Text + Image */}
          <div className="grid grid-cols-[1fr_1.5fr] md:grid-cols-2 gap-4 md:gap-6 items-start mt-3">
            <p className="text-sm md:text-base 2xl:text-lg">
              <span>
                In India, heritage furniture exports require strict compliance
                with protection laws.
              </span>
              <span className="w-full hidden md:block">
                Experts stress that private brands must maintain documentation,
                clearances, and ethical sourcing standards when producing or
                exporting pieces considered culturally or historically
                significant.
              </span>
            </p>

            <img
              src={NB}
              loading="lazy"
              alt="Reclining god statue"
              className="w-full h-full max-h-36 lg:max-h-48 2xl:max-h-68 lg:h-48 2xl:h-68 object-cover object-bottom rounded"
            />
          </div>
          <p className="w-full block md:hidden text-sm mt-2">
            Experts stress that private brands must maintain documentation,
            clearances, and ethical sourcing standards when producing or
            exporting pieces considered culturally or historically significant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
