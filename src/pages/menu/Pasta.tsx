import { DinnerDining } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMenuHandlers } from '../../../utils/menuFunctions';
import Item from '../../components/items/Item';
import IconDescriptions from '../../components/items/iconDescriptions';
import Footer from '../../components/navigation/Footer';
import { massas } from '../../data/mockData';
import { toggleFavorite } from '../../redux/favoriteSlice';

const Pasta: React.FC = () => {
  const {
    handleIncrement,
    handleDecrement,
    handleSendToCart,
    handleSortFavorites,
    sortedFood,
    favorites,
    count,
  } = useMenuHandlers();

  useEffect(() => {
    handleSortFavorites(massas, 'pasta');
  }, [favorites]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleIsFavorite = (name: string) => {
    dispatch(toggleFavorite(name));
  };

  const navigateToFeedback = (name: string, description: string) => {
    navigate(`/feedback`, { state: { name, description } });
  };

  return (
    <Box className="pb-[8vh]">
      <IconDescriptions />
      <Box className="mt-[4vh]">
        <Divider className="!w-[92%] !mb-[4vh]">
          <Typography
            className="underline decoration-yellow-600 sm:!text-6xl"
            variant="h4"
          >
            Massas
          </Typography>
          <DinnerDining className="sm:!w-[50px] sm:!h-[50px] sm:mt-4" />
        </Divider>
        {sortedFood.pasta.map((massa, index) => (
          <Item
            key={massa.name}
            name={massa.name}
            description={massa.description}
            isVeg={massa.isVeg}
            noLactose={massa.noLactose}
            itsLastItem={index === massas.length - 1}
            handleButtonReview={() =>
              navigateToFeedback(massa.name, massa.description)
            }
            count={count[massa.name] || 0}
            onIncrement={() => handleIncrement({ itemName: massa.name })}
            onDecrement={() => handleDecrement(massa.name)}
            handleIsFavorite={() => handleIsFavorite(massa.name)}
            isFavorite={favorites.includes(massa.name)}
          />
        ))}
      </Box>
      <Footer handleOnClick={() => handleSendToCart('/confirmation')} />
    </Box>
  );
};

export default Pasta;
