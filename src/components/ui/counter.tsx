import { Box, Typography } from '@mui/material';
import { useState } from 'react';

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
  const [animate, setAnimate] = useState(false);

  const handleAnimaton = () => {
    setAnimate(true);
    onIncrement();
    setTimeout(() => setAnimate(false), 150);
  };

  return (
    <Box
      className={`bg-white shadow-md flex items-center border border-[#ccc] rounded-[4px] p-[6px_8px] sm:p-[12px_16px] gap-[12px] cursor-pointer mt-[5px]
      ${animate && 'tilt-shake'}`}
    >
      <Typography
        onClick={handleAnimaton}
        className="font-bold cursor-pointer text-[#424242] sm:!text-2xl transition duration-100 active:[transform:scale(1.7)]"
      >
        +
      </Typography>

      <Typography className="cursor-pointer text-[#333333] sm:!text-xl sm:px-2">
        {count}
      </Typography>

      <Typography
        onClick={onDecrement}
        className="font-bold cursor-pointer text-[#424242] sm:!text-4xl"
      >
        -
      </Typography>
    </Box>
  );
};

export default Counter;
