import { LocalDrink, Restaurant } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { boxTheme } from '../theme';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateTo = (option: string) => {
    navigate('/' + option);
  };

  return (
    <Box sx={boxTheme}>
      <Button
        onClick={() => navigateTo('pizzas')}
        variant="contained"
        className="sm:!w-3/4 sm:!text-3xl"
      >
        Rodizio
        <Restaurant className="ml-[5px] sm:ml-[10px] sm:!text-5xl" />
      </Button>
      <Button
        onClick={() => navigateTo('bebidas')}
        variant="contained"
        className="sm:!w-3/4 sm:!text-3xl"
      >
        Bebidas
        <LocalDrink className="ml-[5px] sm:ml-[10px] sm:!text-5xl" />
      </Button>
    </Box>
  );
};

export default Home;
