import { Routes, Route } from 'react-router-dom';
import Bmi from './Routes/Bmi';
import Home from './Routes/Home';
import Shopping from './Routes/Shopping';
import Showcase from './Routes/Showcase';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="bmi" element={<Bmi />} />
          <Route path="showcase" element={<Showcase />} />
          <Route path="shopping" element={<Shopping />} />
        </Route>
      </Routes>
    </>
  );
}
