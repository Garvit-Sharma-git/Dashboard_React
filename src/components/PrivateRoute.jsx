import { Navigate, Outlet } from 'react-router-dom';

// A simple PrivateRoute that checks if the user is logged in
function PrivateRoute({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;


