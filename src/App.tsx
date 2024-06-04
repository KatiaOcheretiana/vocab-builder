import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { lazy } from 'react';
const Register = lazy(() => import('./pages/Register/Register.tsx'));
const Login = lazy(() => import('./pages/Login/Login.tsx'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<p>Home</p>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<p>404</p>} />
      </Route>
    </Routes>
  );
}

export default App;
