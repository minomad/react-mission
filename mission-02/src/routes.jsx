import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import WeatherPage from './pages/WeatherPage';
import RootLayout from './layout/RootLayout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'NewsPage', element: <NewsPage /> },
      { path: 'WeatherPage', element: <WeatherPage /> },
    ],
  },
]);

export default router;
