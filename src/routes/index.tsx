import { createBrowserRouter } from 'react-router-dom';

import Home from '../components/Home';
import Layout from '../layout/Layout';


const indexRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
]);

export default indexRoutes;