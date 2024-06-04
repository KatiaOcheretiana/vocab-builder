import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor, store } from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<p>Loading</p>} persistor={persistor}> */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
    <GlobalStyles />
  </React.StrictMode>
);
