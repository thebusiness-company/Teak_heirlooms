import N1 from '../assets/images/news-1.png'
import N2 from '../assets/images/news-2.png'
import N3 from '../assets/images/news-3.png'
import NB from '../assets/images/news-4.png'

const NewsSection = () => {
  return (
    <div className="w-full max-w-[90%] mx-auto px-4 pt-10 pb-4 overflow-x-hidden">
      <h2 className="text-3xl font-semibold text-center mb-8 lg:mb-10 text-[#3B493F]">
        NEWS
      </h2>

      <div className="space-y-12">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-14 xl:gap-18 items-start">
          {/* Column 1 */}
          <div>
            <h3 className="text-[#9C0300] font-semibold text-lg md:text-xl mb-2">
              Design, Heritage & Craft
            </h3>
            <p className="text-sm ">
              The Heritage Series showcases hand-finished, numbered teak
              furniture crafted from reclaimed, certified wood aged over 30
              years. Featuring a triangular coffee table with rounded edges and
              log legs, the design blends vernacular inspiration with
              contemporary minimalism and artisan authenticity.
            </p>
          </div>

          {/* Image in middle */}
          <div className="my-6 md:mb-0">
            <img
              src={N1}
              alt="Article"
              className="w-full h-48 md:h-52 object-cover rounded"
            />
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[#9C0300] font-semibold text-lg md:text-xl mb-2">
              Auction & Showroom
            </h3>
            <p className="text-sm ">
              TeakHeirlooms’ Heritage collection will be displayed at its
              Chennai showroom from December 1–7. The Bengaluru auction, held in
              hybrid mode, invites in-person and online bidders, with reserve
              prices ranging from ₹2 lakh to ₹5 lakh for select pieces.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-14 xl:gap-18 items-start">
          {/* Left image */}
          <div className="mb-6 md:mb-0">
            <img
              src={N2}
              alt="Article"
              className="w-full h-48 xl:h-52 aspect-square object-cover object-bottom rounded"
            />
          </div>

          {/* Text center */}
          <div>
            <h3 className="text-[#9C0300] font-semibold text-lg md:text-xl mb-2 w-full lg:max-w-[70%]">
              Brand Positioning & Market
            </h3>
            <p className="text-sm ">
              TeakHeirlooms positions its Heritage Series as collectible art,
              blending utility and design. Emphasising craftsmanship and
              authenticity, the brand aims to create heirloom pieces, tapping
              into rising demand for limited editions, provenance, and
              meaningful design narratives in India’s premium market.
            </p>
          </div>

          {/* Right image */}
          <div className="flex justify-end mt-6 md:mt-0">
            <img
              src={N3}
              alt="Article"
              className="w-full h-48 xl:h-52 object-cover object-bottom rounded"
            />
          </div>
        </div>

        {/* Third Row - Full width text */}
        <div>
          <h3 className="text-[#9C0300] font-semibold text-lg md:text-xl mb-2">
            Ethical / Legal Concerns & Heritage Protection
          </h3>
          <p className="text-sm ">
            TeakHeirlooms ensures all wood is legally sourced, though
            sustainability of reclaimed timber remains a concern.
          </p>

          {/* Fourth Row - Text + Image */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 items-start mt-3">
            <p className="text-sm">
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
              alt="Article"
              className="w-full h-full max-h-36 lg:max-h-48 lg:h-48 object-cover object-bottom rounded"
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
