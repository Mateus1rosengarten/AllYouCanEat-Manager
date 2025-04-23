import { ListAlt, ShoppingCartOutlined } from '@mui/icons-material';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMenuHandlers } from '../../utils/menuFunctions';
import Footer from '../components/navigation/Footer';
import SuccessModal from '../components/ui/modal';
import TableItems from '../components/ui/table';
import { addItemToHistory } from '../redux/historySlice';
import { clearCart, removeItem } from '../redux/menuSlice';
import { CartItem } from '../types/types';

const Confirmation: React.FC = () => {
  const { navigate, menu } = useMenuHandlers();
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('menu:', menu);
  }, [menu]);

  const handleAddItemsToHitory = () => {
    menu.forEach((item) => {
      handleAddItemsToHitoryStorage(item);
    });
  };

  const handleAddItemsToHitoryStorage = (newItem: CartItem) => {
    const previousHistory: CartItem[] = JSON.parse(
      localStorage.getItem('itemsHistory') || '[]'
    );
    console.log('previusHistory:', previousHistory);

    const itemIndex = previousHistory.findIndex(
      (item: CartItem) => item.name === newItem.name
    );

    if (itemIndex !== -1) {
      previousHistory[itemIndex].quantity += newItem.quantity;
    } else {
      previousHistory.push(newItem);
    }
    localStorage.setItem('itemsHistory', JSON.stringify(previousHistory));
    dispatch(addItemToHistory(newItem));
  };

  const handleSendItemsToKitchen = () => {
    handleAddItemsToHitory();
    dispatch(clearCart());
    localStorage.removeItem('ItemsCart');
    setOpenModal(true);
    handleAutoClose();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAutoClose = () => {
    setTimeout(() => {
      setOpenModal(false);
      navigate('/pizzas');
    }, 3000);
  };

  const handleDeleteItemFromCart = (name: string, quantity: number) => {
    dispatch(removeItem({ name, quantity }));
  };
  return (
    <>
      {openModal && (
        <SuccessModal
          open={openModal}
          close={() => handleCloseModal()}
          message="Pedido realizado com sucesso!"
        />
      )}

      {menu.length > 0 ? (
        <Box className="pt-10 sm:pt-20">
          <Divider sx={{ width: '90%', marginBottom: '5vh' }}>
            <Typography
              className="underline decoration-yellow-400 sm:!text-6xl"
              variant="h4"
            >
              Pedido
            </Typography>
            <ListAlt
              htmlColor="#0000008A"
              className="sm:!w-[50px] sm:!h-[50px] sm:mt-4"
            />
          </Divider>
          <TableItems
            initialItems={menu}
            remove={true}
            handleDeleteItemFromCart={handleDeleteItemFromCart}
          />
        </Box>
      ) : (
        <Box className="text-center mt-20 flex flex-col space-y-8">
          <Typography variant="h5" className="font-xl">
            Seu carrinho está vazio!
          </Typography>
          <IconButton>
            <ShoppingCartOutlined fontSize="large" />
          </IconButton>
        </Box>
      )}

      <Footer handleOnClick={() => handleSendItemsToKitchen()} />
    </>
  );
};

export default Confirmation;
