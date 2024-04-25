import { Outlet, Navigate } from "react-router-dom";
// import Cookies from "js-cookie";
const ProtectedRoutes = () => {
    //const user = Cookies.get("pulse_user");
    const user = true;
  return (
    user ? <Outlet /> : <Navigate to="/sign-in" />
  )
}

export default ProtectedRoutes;

