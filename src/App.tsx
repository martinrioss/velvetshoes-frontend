import { RouterProvider } from 'react-router-dom';

import indexRoutes from './routes';

import './App.css';

function App() {
  return <RouterProvider router={ indexRoutes }/>;
}

export default App;
