import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@mohit/ui";
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
      <section id="center">
        <form className="form-login" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="form-group username">
            <label>Username</label>
            <input
              className="otpTextBox"
              type="text"
              value={username}
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {username && (
            <div className="form-group">
              <label>OTP</label>
              <div className="otpDiv">
                {otp.map((otp, index) => (
                  <TextField
                    key={index}
                    value={otp}
                    otpIndex={index}
                    setValue={handleOTP}
                    ref={(el) => (inputRefs.current[index] = el)}
                    handleKeyDown={handleKeyDown}
                  />
                ))}
              </div>
            </div>
          )}
          <input className="btn-submit" type="submit" value="Submit" />
        </form>
        <h2>{error}</h2>
      </section>
    </>
  );
};

export default Login;
