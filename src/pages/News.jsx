import N1 from '../assets/images/news1.png'
import N2 from '../assets/images/news2.png'
import N3 from '../assets/images/news3.png'
import NB from '../assets/images/newsbottom.png'
const NewsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">NEWS</h2>

      <div className="grid grid-cols-1 gap-6">
        {/* First row -three columns */}
        <div className="grid grid-cols-3 place-items-center gap-6 ">
          <div className='text-left'>
          <h3 className=" text-base lg:text-xl font-semibold text-[#9C0300] mt-4 ">
            Your Article Title Goes Here
          </h3>
          <p className="text-sm lg:text-lg max-w-32 text-gray-600 mt-2 lg:mt-6 lg:max-w-2xl">
           This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..
          </p>
          </div>
          <div className='h-full'>
          <img
            src={N1}
            alt="Article Image"
            // className="w-32 md:w-xs h-full lg:w-full lg:max-h-52 object-cover rounded-lg"
            className='w-full h-full object-cover '
          />
          </div>
          <div className='text-left'>
          <h3 className="text-base lg:text-xl font-semibold text-[#9C0300] mt-4 text-left">
            Your Article Title Goes Here
          </h3>
          <p className="text-sm  lg:text-lg max-w-32 text-gray-600 mt-2 lg:mt-6 lg:max-w-2xl">
            This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..
          </p>
          </div>
        </div>

        {/* Second Row - 3 columns */}
        <div className="grid grid-cols-3 place-items-center lg:gap-12 mt-12">
          <div className='h-full'>
          <img
            src={N2}
            alt="Article Image"
            // className="w-24 h-full md:w-xs lg:w-full max-h-40 object-cover rounded-lg"
            className='w-full h-full object-cover '
          />
          </div>
          <div className='text-left px-4 lg:px-10 lg:max-w-full'>
          <h3 className="text-base lg:text-xl font-semibold text-[#9C0300] mt-3">
            Your Article Title Goes Here
          </h3>
          <p className="text-sm max-h-fit lg:text-lg text-gray-600 mt-2 lg:mt-6">
            This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..
          </p>
          </div>
          <div className='h-full' >
          <img
            src={N3}
            alt="Article Image"
            // className="w-24 h-full md:w-xs lg:w-full max-h-40 object-cover rounded-lg"
            className='w-full h-full object-cover'
          />
          </div>
        </div>

        {/* <div className="flex flex-col items-center text-center">
          <img
            src="/path-to-your-image3.jpg"
            alt="Article Image"
            className="w-full max-h-40 object-cover rounded-lg"
          />
          <h3 className="text-lg font-semibold text-red-600 mt-3">
            Your Article Title Goes Here
          </h3>
          <p className="text-gray-600 mt-2">
            This space is for an excerpt or preview of your main article.
          </p>
        </div> */}

        {/* Bottom row - 1 column */}
        {/* <div className="md:col-span-2 flex flex-col items-center text-left"> */}
        <div >
          <h3 className="text-base lg:text-xl font-semibold text-[#9C0300] mt-6">
            Your Article Title Goes Here
          </h3>
          <p className="text-sm lg:text-lg text-gray-600 mt-6 md:mb-4 ">
            This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..
          </p>
          </div>
          <div className='flex flex-row items-center space-x-6'>
          <p className="text-sm lg:text-lg text-gray-600 mt-6 lg:max-w-3xl">
            This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
Whatever you choose, don't give everything away! After all, you want them to read the full article..
          </p>
          <img 
          src={NB} 
          alt="Article Image" 
          className='lg:w-lg max-h-52'
          />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default NewsSection;
