import { LocalPizzaTwoTone } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMenuHandlers } from '../../../utils/menuFunctions';
import Item from '../../components/items/Item';
import IconDescriptions from '../../components/items/iconDescriptions';
import Footer from '../../components/navigation/Footer';
import { pizzasDoces } from '../../data/mockData';
import { toggleFavorite } from '../../redux/favoriteSlice';
import { RootState } from '../../redux/store';

const SweetFlavours: React.FC = () => {
  const {
    handleIncrement,
    handleDecrement,
    handleSendToCart,
    navigate,
    count,
    menu,
  } = useMenuHandlers();

  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorite.favorites);

  useEffect(() => {
    console.log('menu', menu);
  }, [menu]);
  const navigateToFeedback = (name: string, description: string) => {
    navigate(`/feedback`, { state: { name, description } });
  };

  const handleIsFavorite = (name: string) => {
    dispatch(toggleFavorite(name));
  };

  return (
    <Box paddingBottom="8vh">
      <IconDescriptions />
      <Box sx={{ marginTop: '4vh' }}>
        <Divider
          sx={{
            width: '92%',
            marginBottom: '4vh',
          }}
        >
          <Typography className="yellow-underline" variant="h4">
            Pizzas Doces
          </Typography>
          <LocalPizzaTwoTone />
        </Divider>
        {pizzasDoces.map((pizza, index) => (
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
