import React from "react";
import { useSelector} from "react-redux";


const ProtectedRoute = ({ children }) => {
  const location = useLocation ();
  const IsLoggeduser = useSelector(state =>state.user.IsLogged);

  if (IsLoggeduser) return <>{children}</>;
  else return <Navigate to="/login" replace state={{location}}/>;
};

export default ProtectedRoute;
