import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
          alt="Page Not Found"
        />

        <h1>Page Not Found</h1>

        <p>The page you're looking for doesn't exist or may have been moved.</p>

        <button onClick={() => navigate("/")}>Back to Homepage</button>
      </div>
    </div>
  );
};

export default NotFound;
