import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useMenuHandlers } from '../../../utils/menuFunctions';
import CupsItem from '../../components/items/CupsItem';
import Footer from '../../components/navigation/Footer';
import { cups } from '../../data/mockData';

const DrinkOption: React.FC = () => {
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
        alignItems: 'flex-start',
        paddingTop: '12vh',
        paddingBottom: '8vh',
        gap: '2vw',
      }}
    >
      {cups.map((cup, index) => (
        <CupsItem
          key={index}
          name={cup.name}
          count={count[cup.name] || 0}
          onIncrement={() => handleIncrement({ itemName: cup.name })}
          onDecrement={() => handleDecrement(cup.name)}
          itsLastItem={index === cups.length - 1}
          drinkIcon={cup.drinkIcon}
          drinkIcon2={cup.drinkIcon2}
        />
      ))}
      <Footer handleOnClick={() => handleSendToCart('/confirmation')} />
    </Box>
  );
};

export default DrinkOption;
