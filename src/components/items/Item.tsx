import {
  Favorite,
  FavoriteBorder,
  RateReviewOutlined,
} from '@mui/icons-material';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import Icons from '../items/icons';
import Counter from '../ui/counter';

interface ItemProps {
  name: string;
  description: string;
  isVeg: boolean;
  noLactose: boolean;
  isFavorite: boolean;
  handleButtonReview?: () => void;
  handleIsFavorite: (name: string) => void;
  itsLastItem?: boolean;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Item: React.FC<ItemProps> = ({
  name,
  description,
  isVeg,
  noLactose,
  isFavorite,
  handleButtonReview,
  handleIsFavorite,
  itsLastItem,
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          marginBottom: !itsLastItem ? '1vh' : '4vh',
          gap: '4vw',
          paddingLeft: '4vw',
        }}
      >
        <Counter
          count={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%',
              paddingTop: '1.5px',
            }}
          >
            <Typography variant="h5">{name}</Typography>
            <Icons isVeg={isVeg} noLactose={noLactose} />
          </Box>
          <Typography width={'80%'} variant="body1">
            {description}
          </Typography>
        </Box>
        <Box className="flex px-2">
          <IconButton onClick={handleButtonReview}>
            <RateReviewOutlined htmlColor="#000000A0" />
          </IconButton>

          <IconButton onClick={() => handleIsFavorite(name)}>
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Box>
      </Box>
      {!itsLastItem && <Divider />}
    </>
  );
};

export default Item;
