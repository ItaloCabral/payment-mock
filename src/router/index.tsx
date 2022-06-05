import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { Home } from 'pages';

export const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
