import { History } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/navigation/Footer';
import TableItems from '../components/ui/table';
import { RootState } from '../redux/store';

const HistoryItems: React.FC = () => {
  const history = useSelector((state: RootState) => state.history.history);

  useEffect(() => {
    console.log('history:', history);
  }, [history]);

  return (
    <>
      <Box className="pt-20 pb-10">
        <Divider sx={{ width: '90%', marginBottom: '5vh' }}>
          <Typography
            className="underline decoration-yellow-400 sm:!text-6xl"
            variant="h4"
          >
            Pedidos Feitos
          </Typography>
          <History
            htmlColor="#0000008A"
            className="sm:!w-[50px] sm:!h-[50px] sm:mt-4"
          />
        </Divider>
        <TableItems initialItems={history} remove={false} />
        <Footer handleOnClick={() => null} />
      </Box>
    </>
  );
};

export default HistoryItems;
