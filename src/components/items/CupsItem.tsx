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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
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

        <Typography marginTop="2px" variant="h5" maxWidth="70%">
          {name}
        </Typography>

        <Box
          display="flex"
          sx={{
            position: 'absolute',
            right: '20px',
            marginTop: '10px',
          }}
        >
          <img
            src={drinkIcon}
            alt="Custom Icon"
            style={{ width: 20, height: 20, paddingTop: '0px' }}
          />
          {drinkIcon2 && (
            <img
              src={drinkIcon2}
              alt="Custom Icon"
              style={{ width: 20, height: 20, paddingTop: '0px' }}
            />
          )}
        </Box>
      </Box>

      {!itsLastItem && <Divider sx={{ width: '92%' }} />}
    </>
  );
};

export default CupsItem;
