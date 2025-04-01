import { LocalDrink } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useMenuHandlers } from '../../../utils/menuFunctions';
import DrinkItem from '../../components/items/DrinkItem';
import Footer from '../../components/navigation/Footer';
import { drinks } from '../../data/mockData';

const Drinks: React.FC = () => {
  const { handleIncrement, handleDecrement, handleSendToCart, count, menu } =
    useMenuHandlers();

  useEffect(() => {
    console.log('menu', menu);
  }, [menu]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '8vh',
        marginTop: '4vh',
        gap: '2vw',
      }}
    >
      <Divider
        sx={{
          width: '92%',
          marginBottom: '4vh',
        }}
      >
        <Typography className="yellow-underline" variant="h4">
          Bebidas
        </Typography>
        <LocalDrink />
      </Divider>
      {drinks.map((drink, index) => (
        <DrinkItem
          key={index}
          name={drink.name}
          price={drink.price}
          count={count[drink.name] || 0}
          onIncrement={() => handleIncrement({ itemName: drink.name })}
          onDecrement={() => handleDecrement(drink.name)}
          itsLastItem={index === drinks.length - 1}
        />
      ))}

      <Footer handleOnClick={() => handleSendToCart('/bebidas/copos')} />
    </Box>
  );
};

export default Drinks;
