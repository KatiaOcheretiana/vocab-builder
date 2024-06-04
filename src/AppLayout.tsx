import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/Navigation/Navigation';

export const AppLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<p>Loading..</p>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyles />
    </>
  );
};
