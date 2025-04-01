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
      <Button onClick={() => navigateTo('pizzas')} variant="contained">
        Rodizio
        <Restaurant sx={{ marginLeft: '5px' }} />
      </Button>
      <Button onClick={() => navigateTo('bebidas')} variant="contained">
        Bebidas
        <LocalDrink sx={{ marginLeft: '5px' }} />
      </Button>
    </Box>
  );
};

export default Home;
