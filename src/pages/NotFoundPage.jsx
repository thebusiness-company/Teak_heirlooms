import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#9C0300] mb-4">404</h1>
        <p className="text-2xl text-[#9C0300] mb-8">Page Not Found</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 transition duration-200">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;