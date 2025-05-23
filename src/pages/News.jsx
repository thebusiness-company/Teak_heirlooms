import N1 from '../assets/images/news1.png'
const NewsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">NEWS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Large Article */}
        <div className="md:col-span-2 flex flex-col items-center text-center">
          <img
            src=""
            alt="Article Image"
            className="w-full max-h-64 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold text-red-600 mt-4">
            Your Article Title Goes Here
          </h3>
          <p className="text-gray-600 mt-2 max-w-2xl">
            This space is for an excerpt or preview of your main article. You
            can opt to simply add the first paragraph directly or create a
            summary or teaser for it.
          </p>
        </div>

        {/* Side Articles */}
        <div className="flex flex-col items-center text-center">
          <img
            src={N1}
            alt="Article Image"
            className="w-full max-h-40 object-cover rounded-lg"
          />
          <h3 className="text-lg font-semibold text-red-600 mt-3">
            Your Article Title Goes Here
          </h3>
          <p className="text-gray-600 mt-2">
            This space is for an excerpt or preview of your main article.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
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
        </div>

        {/* Bottom Articles */}
        <div className="md:col-span-2 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-red-600 mt-6">
            Your Article Title Goes Here
          </h3>
          <p className="text-gray-600 mt-2 max-w-3xl">
            This space is for an excerpt or preview of your main article. You
            can opt to simply add the first paragraph directly or create a
            summary or teaser for it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
