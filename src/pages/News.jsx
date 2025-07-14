import N1 from '../assets/images/news1.png'
import N2 from '../assets/images/news2.png'
import N3 from '../assets/images/news3.png'
import NB from '../assets/images/newsbottom.png'

const NewsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">NEWS</h2>

      <div className="space-y-12">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Column 1 */}
          <div>
            <h3 className="text-[#9C0300] font-semibold text-lg mb-2">
              Your Article Title Goes Here
            </h3>
            <p className="text-sm ">
              This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..
            </p>
          </div>

          {/* Image in middle */}
          <div>
            <img
              src={N1}
              alt="Article"
              className="w-full h-48 md:h-52 object-cover rounded"
            />
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[#9C0300] font-semibold text-lg mb-2">
              Your Article Title Goes Here
            </h3>
            <p className="text-sm ">
             This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left image */}
          <div>
            <img
              src={N2}
              alt="Article"
              className="w-full h-48 object-cover rounded"
            />
          </div>

          {/* Text center */}
          <div>
            <h3 className="text-[#9C0300] font-semibold text-lg mb-2">
              Your Article Title Goes Here
            </h3>
            <p className="text-sm ">
             This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..
            </p>
          </div>

          {/* Right image */}
          <div>
            <img
              src={N3}
              alt="Article"
              className="w-full h-48 object-cover rounded"
            />
          </div>
        </div>

        {/* Third Row - Full width text */}
        <div>
          <h3 className="text-[#9C0300] font-semibold text-lg mb-2">
            Your Article Title Goes Here
          </h3>
          <p className="text-sm ">
          This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..
          </p>
        </div>

        {/* Fourth Row - Text + Image */}
        <div className="grid grid-cols-2 gap-6 items-start">
          <p className="text-sm">
            This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..
          </p>
          <img
            src={NB}
            alt="Article"
            className="w-full max-h-72 lg:h-48 object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
