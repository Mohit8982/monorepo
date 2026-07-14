import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { doLogin } from "../redux/loginSlice";

const Login = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [username, setUsername] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, error, user } = useSelector((state) => state.login);

  function handleOTP(value, index) {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    console.log("component", isLogin);

    if (isLogin) {
      switch (user?.role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "customer":
          navigate("/products");
          break;
        case "employee":
          navigate("/employee/dashboard");
          break;
      }
    }
  }, [isLogin, user, navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(doLogin({ otp: otp.join(""), username }));
  };

  return (
    <>
      <section className="flex flex-grow flex-col items-center justify-center gap-6 p-5 lg:gap-6 lg:p-[5%]">
        <form
          className="w-full max-w-md rounded-xl bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div className="mb-6 flex flex-col">
            <label className="mb-2 font-semibold text-gray-800">Username</label>

            <input
              type="text"
              value={username}
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              className="h-[55px] w-48 rounded-lg border-2 border-gray-300 pl-3 text-2xl outline-none transition-all focus:border-blue-600"
            />
          </div>

          {username && (
            <div className="mb-4 flex flex-col">
              <label className="mb-2 font-semibold text-gray-800">OTP</label>

              <div className="flex gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    value={digit}
                    maxLength={1}
                    onChange={(e) => handleOTP(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="
            h-14
            w-14
            rounded-lg
            border-2
            border-gray-300
            text-center
            text-2xl
            font-semibold
            outline-none
            transition-all
            focus:border-blue-600
            focus:ring-2
            focus:ring-blue-200
          "
                  />
                ))}
              </div>
            </div>
          )}

          <input
            className="mt-3 w-full cursor-pointer rounded-lg bg-blue-600 p-3 text-base font-semibold text-white transition-all hover:bg-blue-700 active:scale-[0.98]"
            type="submit"
            value="Submit"
          />
        </form>

        {error && (
          <h2 className="text-center text-base font-medium text-red-500">
            {error}
          </h2>
        )}
      </section>
    </>
  );
};

export default Login;
