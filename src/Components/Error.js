import { useRouteError } from "react-router-dom";
import '../styles/tailwind.css';

const Error = () => {
  // const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">404 Not Found</h1>
        <p className="text-gray-600 text-center mb-8">
          Oops! The page you are looking for could not be found.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Error;
// 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