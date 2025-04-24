import { ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navigation/NavBar.js';
import Confirmation from './pages/Confirmation.js';
import FeedBack from './pages/FeedBack.js';
import FoodOptions from './pages/FoodOptions.js';
import History from './pages/History.js';
import Home from './pages/Home';
import DrinkOption from './pages/menu/DrinkOption.js';
import Drinks from './pages/menu/Drinks.js';
import Pasta from './pages/menu/Pasta.js';
import Savory from './pages/menu/Savory.js';
import SweetFlavours from './pages/menu/SweetFlavours.js';
import NotSupported from './pages/notSuported.js';
import theme from './theme.js';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return <NotSupported />;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavBar src={'/public/italiapizza.png'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizzas" element={<FoodOptions />} />
        <Route path="/salgadas" element={<Savory />} />
        <Route path="/doces" element={<SweetFlavours />} />
        <Route path="/massas" element={<Pasta />} />
        <Route path="/bebidas" element={<Drinks />} />
        <Route path="/bebidas/copos" element={<DrinkOption />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/historico" element={<History />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
