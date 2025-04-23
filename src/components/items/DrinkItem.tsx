import { Box, Divider, Typography } from '@mui/material';
import Counter from '../ui/counter';

interface DrinkItemProps {
  name: string;
  price?: number;
  itsLastItem?: boolean;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const DrinkItem: React.FC<DrinkItemProps> = ({
  name,
  price,
  itsLastItem,
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <>
      <Box
        className={`flex items-start gap-[4vw] pl-[4vw] w-[80%] ${
          !itsLastItem ? 'mb-[1vh]' : 'mb-[4vh]'
        }`}
      >
        <Counter
          count={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />

        <Typography
          className="!mt-[3px] sm:!mt-[10px] sm:!text-3xl"
          variant="h5"
        >
          {name}
        </Typography>
        <Box className="flex items-center absolute right-[20px] sm:right-[60px] mt-[5px] sm:mt-[10px]">
          <Typography className="sm:!text-2xl">{`R$${price},00`}</Typography>
        </Box>
      </Box>

      {!itsLastItem && <Divider className="w-[92%]" />}
    </>
  );
};

export default DrinkItem;
