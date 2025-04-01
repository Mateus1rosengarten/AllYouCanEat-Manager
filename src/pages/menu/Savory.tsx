import { LocalPizzaOutlined, LocalPizzaRounded } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useMenuHandlers } from '../../../utils/menuFunctions';
import Item from '../../components/items/Item';
import IconDescriptions from '../../components/items/iconDescriptions';
import Footer from '../../components/navigation/Footer';
import { pizzas, pizzasEspeciais } from '../../data/mockData';

const Savory: React.FC = () => {
  const {
    handleIncrement,
    handleDecrement,
    handleSendToCart,
    handleSortFavorites,
    handleIsFavorite,
    navigate,
    count,
    favorites,
    sortedPizzas,
  } = useMenuHandlers(pizzas);

  useEffect(() => {
    handleSortFavorites(pizzas);
  }, [favorites, pizzas]);

  const navigateToFeedback = (name: string, description: string) => {
    navigate(`/feedback`, { state: { name, description } });
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
            Tradicionais
          </Typography>
          <LocalPizzaOutlined htmlColor="#0000008A" />
        </Divider>

        {sortedPizzas.map((pizza, index) => (
          <Item
            key={index}
            name={pizza.name}
            description={pizza.description}
            isVeg={pizza.isVeg}
            noLactose={pizza.noLactose}
            itsLastItem={index === pizzas.length - 1}
            handleButtonReview={() =>
              navigateToFeedback(pizza.name, pizza.description)
            }
            count={count[pizza.name] || 0}
            onIncrement={() => handleIncrement({ itemName: pizza.name })}
            onDecrement={() => handleDecrement(pizza.name)}
            handleIsFavorite={() => handleIsFavorite(pizza.name)}
            isFavorite={favorites.includes(pizza.name)}
          />
        ))}
      </Box>
      <Box>
        <Divider sx={{ width: '90%', marginBottom: '5vh' }}>
          <Typography className="yellow-underline" variant="h4">
            Especiais
          </Typography>
          <LocalPizzaRounded htmlColor="#0000008A" />
        </Divider>
        {pizzasEspeciais.map((pizza, index) => (
          <Item
            key={index}
            name={pizza.name}
            description={pizza.description}
            isVeg={pizza.isVeg}
            noLactose={pizza.noLactose}
            itsLastItem={index === pizzasEspeciais.length - 1}
            handleButtonReview={() =>
              navigateToFeedback(pizza.name, pizza.description)
            }
            count={count[pizza.name] || 0}
            onIncrement={() => handleIncrement({ itemName: pizza.name })}
            onDecrement={() => handleDecrement(pizza.name)}
            handleIsFavorite={() => handleIsFavorite(pizza.name)}
            isFavorite={favorites.includes(pizza.name)}
          />
        ))}
      </Box>
      <Footer handleOnClick={() => handleSendToCart('/confirmation')} />
    </Box>
  );
};

export default Savory;
