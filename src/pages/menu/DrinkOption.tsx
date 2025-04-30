import { LocalDrinkOutlined } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
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
    <Box className="flex flex-col items-start pt-[5vh] pb-[8vh] sm:pb-[12vh] gap-[2vw]">
      <Divider className="!w-[92%] !mb-[4vh]">
        <Typography
          className="underline decoration-yellow-400 sm:!text-6xl"
          variant="h4"
        >
          Copos
        </Typography>
        <LocalDrinkOutlined className="sm:!w-[50px] sm:!h-[50px] sm:mt-4" />
      </Divider>
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
