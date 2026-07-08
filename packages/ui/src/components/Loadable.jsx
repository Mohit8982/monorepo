import { Suspense } from "react";
import Loader from "./Loader";

export default function Loadable(Component) {
  return (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}
