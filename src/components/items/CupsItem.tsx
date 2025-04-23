import { Box, Divider, Typography } from '@mui/material';
import Counter from '../ui/counter';

interface DrinkItemProps {
  name: string;
  itsLastItem?: boolean;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  drinkIcon: string;
  drinkIcon2?: string;
}

const CupsItem: React.FC<DrinkItemProps> = ({
  name,
  itsLastItem,
  count,
  onIncrement,
  onDecrement,
  drinkIcon,
  drinkIcon2,
}) => {
  return (
    <>
      <Box className="flex items-start mb-[1vh] last:mb-[4vh] gap-[4vw] pl-[4vw] w-[80%]">
        <Counter
          count={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />

        <Typography
          className="!mt-[2px] !text-lg sm:!mt-[12px] sm:!text-3xl max-w-[70%]"
          variant="h5"
        >
          {name}
        </Typography>

        <Box className="absolute right-[20px] sm:!right-[100px] mt-[10px] flex">
          <img
            src={drinkIcon}
            alt="Custom Icon"
            className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] pt-0"
          />
          {drinkIcon2 && (
            <img
              src={drinkIcon2}
              alt="Custom Icon"
              className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] pt-0"
            />
          )}
        </Box>
      </Box>

      {!itsLastItem && <Divider className="w-[92%]" />}
    </>
  );
};

export default CupsItem;
