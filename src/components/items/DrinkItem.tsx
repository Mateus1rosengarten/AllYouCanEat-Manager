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
        sx={{
          display: 'flex',
          marginBottom: !itsLastItem ? '1vh' : '4vh',
          gap: '4vw',
          paddingLeft: '4vw',
          width: '80%',
        }}
      >
        <Counter
          count={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />

        <Typography marginTop="3px" variant="h5">
          {name}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          position="absolute"
          right="20px"
          marginTop="5px"
        >
          <Typography>{`R$${price},00`}</Typography>
        </Box>
      </Box>

      {!itsLastItem && <Divider sx={{ width: '92%' }} />}
    </>
  );
};

export default DrinkItem;
