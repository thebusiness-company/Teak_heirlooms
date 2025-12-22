const HomeCategorySkeleton = () => {
  return (
    <div className="bg-white p-6 w-full max-w-[94%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] lg:h-[500px] overflow-hidden bg-gray-200 animate-pulse"
          >
            {/* Gradient overlay placeholder */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-300/40 via-transparent to-gray-400/30"></div>

            {/* Text placeholders */}
            <div className="absolute inset-0 flex flex-col items-center p-4 lg:mt-10 z-20">
              <div className="h-5 w-32 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-40 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-48 bg-gray-300 rounded mb-4"></div>
              <div className="h-6 w-24 bg-gray-400 rounded"></div>

              <div className="absolute bottom-6 left-6 lg:left-14 h-4 w-20 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategorySkeleton;
