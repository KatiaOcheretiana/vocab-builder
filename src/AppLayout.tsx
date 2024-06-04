import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { Toaster } from 'react-hot-toast';

export const AppLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<p>Loading..</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
