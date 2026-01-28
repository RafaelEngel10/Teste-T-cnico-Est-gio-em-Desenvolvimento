import Home from '../pages/Home.jsx';
import Cadastrar from '../pages/Cadastrar.jsx';
import { Listar } from '../pages/Listar.jsx';

export const PublicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/cadastrar/:id', element: <Cadastrar /> },
  { path: '/listar/:id', element: <Listar />},
];