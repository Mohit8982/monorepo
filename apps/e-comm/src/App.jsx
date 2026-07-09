import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setAuthChecked } from "./redux/loginSlice";
import AppRoutes from "./routes/appRoutes";
import { ScrollToTop, Loader } from "@mohit/ui";
import { Suspense } from "react";

function App() {
  const dispatch = useDispatch();
  const { authChecked } = useSelector((state) => state.login);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`/api/auth/me`, {
          credentials: "include",
        });

        console.log(response.json());

        if (response.ok) {
          const data = await response.json();
          dispatch(setLogin(data.user));
        } else {
          dispatch(setAuthChecked());
        }
      } catch (error) {
        console.error(error);
        dispatch(setAuthChecked());
      }
    };

    if (!authChecked) {
      checkAuth();
    }
  }, [dispatch, authChecked]);

  if (!authChecked) {
    return <Loader />;
  }

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </>
  );
}

export default App;
