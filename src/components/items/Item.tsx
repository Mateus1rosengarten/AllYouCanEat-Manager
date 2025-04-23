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
        className={`flex items-start gap-[4vw] pl-[4vw] ${
          !itsLastItem ? 'mb-[1vh]' : 'mb-[4vh]'
        }`}
      >
        <Counter
          count={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />

        <Box className="flex flex-col w-[80%]">
          <Box className="flex flex-wrap w-full pt-[1.5px] sm:pt-[8px]">
            <Typography variant="h5" className="sm:!text-3xl">
              {name}
            </Typography>
            <Icons isVeg={isVeg} noLactose={noLactose} />
          </Box>
          <Typography width={'80%'} className="sm:!text-xl" variant="body1">
            {description}
          </Typography>
        </Box>
        <Box className="flex px-2 sm:px-20 sm:py-4 sm:gap-4">
          <IconButton onClick={handleButtonReview}>
            <RateReviewOutlined
              htmlColor="#000000A0"
              className="mt-[3px] !w-[20px] sm:!w-[35px] sm:!h-[35px]"
            />
          </IconButton>

          <IconButton onClick={() => handleIsFavorite(name)}>
            {isFavorite ? (
              <Favorite className="!w-[20px] h-[5px] sm:!w-[35px] sm:!h-[35px]" />
            ) : (
              <FavoriteBorder className="!w-[20px] sm:!w-[35px] sm:!h-[35px]" />
            )}
          </IconButton>
        </Box>
      </Box>
      {!itsLastItem && <Divider />}
    </>
  );
};

export default Item;
