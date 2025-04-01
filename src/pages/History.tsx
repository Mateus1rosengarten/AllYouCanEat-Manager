import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/navigation/Footer';
import TableItems from '../components/ui/table';
import { RootState } from '../redux/store';

const History: React.FC = () => {
  const history = useSelector((state: RootState) => state.history.history);

  useEffect(() => {
    console.log('history:', history);
  }, [history]);

  return (
    <>
      <TableItems initialItems={history} remove={false} />
      <Footer handleOnClick={() => null} />
    </>
  );
};

export default History;
