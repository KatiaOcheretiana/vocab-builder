// App.tsx
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { lazy } from 'react';
import { PublicRoute } from './PublicRoute.tsx';
import { PrivateRoute } from './PrivateRoute.tsx';
const Register = lazy(() => import('./pages/Register/Register.tsx'));
const Login = lazy(() => import('./pages/Login/Login.tsx'));
const Dictionary = lazy(() => import('./pages/Dictionary/Dictionary.tsx'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<p>Home</p>} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/dictionary" component={<Register />} />
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/dictionary" component={<Login />} />
          }
        />
        <Route
          path="/dictionary"
          element={
            <PrivateRoute redirectTo="/login" component={<Dictionary />} />
          }
        />
        <Route path="*" element={<p>404</p>} />
      </Route>
    </Routes>
  );
}

export default App;
