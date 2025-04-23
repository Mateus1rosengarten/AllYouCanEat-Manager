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
        className="sm:!w-3/4 sm:!text-3xl"
      >
        Pizzas Salgadas
        <LocalPizza className="ml-[5px] sm:ml-[10px] sm:!text-5xl" />
      </Button>
      <Button
        onClick={() => navigateTo('doces')}
        variant="contained"
        color="primary"
        className="sm:!w-3/4 sm:!text-3xl"
      >
        Pizzas Doces
        <LocalPizzaTwoTone className="ml-[5px] sm:ml-[10px] sm:!text-5xl" />
      </Button>
      <Button
        onClick={() => navigateTo('massas')}
        variant="contained"
        color="primary"
        className="sm:!w-3/4 sm:!text-3xl"
      >
        Massas
        <DinnerDining
          sx={{ marginLeft: '5px' }}
          className="ml-[5px] sm:ml-[10px] sm:!text-5xl"
        />
      </Button>
    </Box>
  );
};

export default FoodOptions;
