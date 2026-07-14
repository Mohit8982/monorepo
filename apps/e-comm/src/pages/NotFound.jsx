import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex min-h-[calc(100vh-70px)] items-center justify-center bg-slate-100 p-5">
        <div className="w-full max-w-xl rounded-2xl bg-white p-10 text-center shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
            alt="404"
            className="mx-auto mb-8 w-44"
          />

          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            404 - Page Not Found
          </h1>

          <p className="mb-8 leading-7 text-gray-500">
            Sorry, the page you're looking for doesn't exist or may have been
            removed.
          </p>

          <button
            className="
        rounded-lg bg-blue-600
        px-8 py-3 font-medium text-white
        transition-all duration-300
        hover:scale-105 hover:bg-blue-700
      "
            onClick={() => navigate("/")}
          >
            Back To Home
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
