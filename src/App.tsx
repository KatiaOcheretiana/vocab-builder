import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { lazy } from 'react';
const Register = lazy(() => import('./pages/Register.tsx'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<p>Home</p>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<p>login</p>} />
        <Route path="*" element={<p>404</p>} />
      </Route>
    </Routes>
  );
}

export default App;
