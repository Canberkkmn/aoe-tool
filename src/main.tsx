import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import NoPage from './routes/noPage';
import Unit from './views/unit';
import store from './redux/store/store';
import { Provider } from 'react-redux';

import './index.scss';

const router = createBrowserRouter([
  {
    errorElement: <NoPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/unit',
        element: <Unit />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
