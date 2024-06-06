import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUserName } from './redux/auth/selectors';

interface PrivateRouteProps {
  component: any;
  redirectTo?: string;
}

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
}: PrivateRouteProps) => {
  const userName = useSelector(selectUserName);
  return !userName ? <Navigate to={redirectTo} /> : Component;
};
