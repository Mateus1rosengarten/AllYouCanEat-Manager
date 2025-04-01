import {
  DinnerDining,
  LocalPizza,
  LocalPizzaTwoTone,
} from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { boxTheme } from '../theme';

const FoodOptions: React.FC = () => {
  const navigate = useNavigate();

  const navigateTo = (option: string) => {
    navigate('/' + option);
  };

  return (
    <Box sx={boxTheme}>
      <Button
        onClick={() => navigateTo('salgadas')}
        variant="contained"
        color="primary"
      >
        Pizzas Salgadas
        <LocalPizza sx={{ marginLeft: '5px' }} />
      </Button>
      <Button
        onClick={() => navigateTo('doces')}
        variant="contained"
        color="primary"
      >
        Pizzas Doces
        <LocalPizzaTwoTone sx={{ marginLeft: '5px' }} />
      </Button>
      <Button
        onClick={() => navigateTo('massas')}
        variant="contained"
        color="primary"
      >
        Massas
        <DinnerDining sx={{ marginLeft: '5px' }} />
      </Button>
    </Box>
  );
};

export default FoodOptions;
