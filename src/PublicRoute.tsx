import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserName } from './redux/auth/selectors';

interface PublicRouteProps {
  component: any;
  redirectTo?: string;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const userName = useSelector(selectUserName);

  return userName ? <Navigate to={redirectTo} /> : Component;
};
