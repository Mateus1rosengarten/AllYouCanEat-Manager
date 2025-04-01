import { Box, Typography } from '@mui/material';

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
const Counter: React.FC<CounterProps> = ({
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <Box
      className="bg-white shadow-md"
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '6px 8px',
        gap: '12px',
        cursor: 'pointer',
        marginTop: '5px',
      }}
    >
      <Typography
        onClick={onIncrement}
        sx={{ fontWeight: 'bold', cursor: 'pointer', color: '#424242' }}
      >
        +
      </Typography>

      <Typography
        sx={{
          color: '#333333',
          fontWeight: '400',
        }}
      >
        {count}
      </Typography>

      <Typography
        onClick={onDecrement}
        sx={{ fontWeight: 'bold', cursor: 'pointer', color: '#424242' }}
      >
        -
      </Typography>
    </Box>
  );
};

export default Counter;
