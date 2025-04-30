import { LocalPizzaTwoTone } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMenuHandlers } from '../../../utils/menuFunctions';
import Item from '../../components/items/Item';
import IconDescriptions from '../../components/items/iconDescriptions';
import Footer from '../../components/navigation/Footer';
import { pizzasDoces } from '../../data/mockData';
import { toggleFavorite } from '../../redux/favoriteSlice';

const SweetFlavours: React.FC = () => {
  const {
    handleIncrement,
    handleDecrement,
    handleSendToCart,
    navigate,
    handleSortFavorites,
    sortedFood,
    favorites,
    count,
  } = useMenuHandlers();

  const dispatch = useDispatch();

  useEffect(() => {
    handleSortFavorites(pizzasDoces, 'desserts');
  }, [favorites]);

  const navigateToFeedback = (name: string, description: string) => {
    navigate(`/feedback`, { state: { name, description } });
  };

  const handleIsFavorite = (name: string) => {
    dispatch(toggleFavorite(name));
  };

  return (
    <Box className="pb-[8vh] sm:pt-[40px]">
      <IconDescriptions />
      <Box className="mt-4 sm:pt-[80px]">
        <Divider className="!w-[92%] !mb-[4vh]">
          <Typography
            className="underline decoration-yellow-400 sm:!text-6xl"
            variant="h4"
          >
            Pizzas Doces
          </Typography>
          <LocalPizzaTwoTone className="sm:!w-[50px] sm:!h-[50px] sm:mt-4" />
        </Divider>
        {sortedFood.desserts.map((pizza, index) => (
          <Item
            key={pizza.name}
            name={pizza.name}
            description={pizza.description}
            isVeg={pizza.isVeg}
            noLactose={pizza.noLactose}
            itsLastItem={index === pizzasDoces.length - 1}
            handleButtonReview={() =>
              navigateToFeedback(pizza.name, pizza.description)
            }
            count={count[pizza.name] || 0}
            onIncrement={() => handleIncrement({ itemName: pizza.name })}
            onDecrement={() => handleDecrement(pizza.name)}
            handleIsFavorite={() => handleIsFavorite(pizza.name)}
            isFavorite={favorites.includes(pizza.name)}
          />
        ))}{' '}
      </Box>
      <Footer handleOnClick={() => handleSendToCart('/confirmation')} />
    </Box>
  );
};

export default SweetFlavours;
