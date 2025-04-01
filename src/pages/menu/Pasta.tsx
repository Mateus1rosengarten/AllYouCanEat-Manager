import { DinnerDining } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMenuHandlers } from '../../../utils/menuFunctions';
import Item from '../../components/items/Item';
import IconDescriptions from '../../components/items/iconDescriptions';
import Footer from '../../components/navigation/Footer';
import { massas } from '../../data/mockData';
import { toggleFavorite } from '../../redux/favoriteSlice';
import { RootState } from '../../redux/store';

const Pasta: React.FC = () => {
  const { handleIncrement, handleDecrement, handleSendToCart, count, menu } =
    useMenuHandlers();
  useEffect(() => {
    console.log('menu', menu);
  }, [menu]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorite.favorites);

  const handleIsFavorite = (name: string) => {
    dispatch(toggleFavorite(name));
  };

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
            Massas
          </Typography>
          <DinnerDining />
        </Divider>
        {massas.map((massa, index) => (
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
