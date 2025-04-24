import {
  Close,
  DinnerDining,
  History,
  ListAlt,
  LocalDrink,
  LocalPizza,
  LocalPizzaOutlined,
  Payments,
  PersonAdd,
} from '@mui/icons-material';
import {
  Alert,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SideBarProps {
  drawerOpen: boolean;
  setDrawerOpen: (newOpen: boolean) => void;
}
const SideBar: React.FC<SideBarProps> = ({ drawerOpen, setDrawerOpen }) => {
  const arrayItens = [
    'Pizzas Salgadas',
    'Pizzas Doces',
    'Massas',
    'Bebidas',
    'Pedidos',
  ];

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const navigate = useNavigate();

  const arrayOptions = ['Histórico', 'Chamar o Garçom', 'Pedir a Conta'];

  const routes: Record<string, string> = {
    'Pizzas Salgadas': '/salgadas',
    'Pizzas Doces': '/doces',
    Massas: '/massas',
    Bebidas: '/bebidas',
    Pedidos: '/confirmation',
  };

  const handleItemClick = (item: string) => {
    const route = routes[item];
    navigate(route);
    setDrawerOpen(false);
  };

  const handleActionClick = (item: string) => {
    if (item === 'Histórico') {
      navigate('historico');
      setDrawerOpen(false);
    } else {
      setOpenSnackBar(true);
    }
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const DrawerList = (
    <Box role="presentation" className="w-[70vw] sm:w-[60vw] pt-[5vh]">
      <IconButton
        sx={{ position: 'absolute', right: '10px', top: '2vh' }}
        onClick={toggleDrawer(false)}
      >
        <Close className="sm:!text-4xl sm:mt-8" />
      </IconButton>
      <Box className="pl-6 sm:pl-10">
        <Typography className="!font-medium !text-lg sm:!text-3xl sm:!mb-2">
          {' '}
          Cucinna Italia{' '}
        </Typography>
        <Typography className="sm:!text-2xl"> Mesa #23</Typography>
      </Box>
      <List className="sm:!pl-6 !py-6 sm:!py-10">
        {arrayItens.map((item, index) => (
          <ListItem key={index} disablePadding className="sm:py-3">
            <ListItemButton onClick={() => handleItemClick(item)}>
              <ListItemIcon>
                {index === 0 && (
                  <LocalPizzaOutlined className="sm:!text-4xl sm:!mr-8" />
                )}
                {index === 1 && (
                  <LocalPizza className="sm:!text-4xl sm:!mr-8" />
                )}
                {index === 2 && (
                  <DinnerDining className="sm:!text-4xl sm:!mr-8" />
                )}
                {index === 3 && (
                  <LocalDrink className="sm:!text-4xl sm:!mr-8" />
                )}
                {index === 4 && <ListAlt className="sm:!text-4xl sm:!mr-6" />}
              </ListItemIcon>
              <ListItemText
                primary={
                  <span className="font-semibold text-lg scale-x-105 underline decoration-yellow-500 sm:text-3xl">
                    {item}
                  </span>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className="sm:!pl-6">
        {arrayOptions.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            className="sm:py-3"
            // sx={{
            //   '&:nth-child(even)': { backgroundColor: '#F5F5F5' },
            // }}
          >
            <ListItemButton onClick={() => handleActionClick(item)}>
              <ListItemIcon>
                {index === 0 && <History className="sm:!text-4xl sm:!mr-8" />}
                {index === 1 && <PersonAdd className="sm:!text-4xl sm:!mr-8" />}
                {index === 2 && <Payments className="sm:!text-4xl sm:!mr-8" />}
              </ListItemIcon>
              <ListItemText
                primary={
                  <span className="font-semibold text-lg underline decoration-yellow-500 sm:text-3xl">
                    {item}
                  </span>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Snackbar
        open={openSnackBar}
        onClose={handleCloseSnackBar}
        autoHideDuration={3000}
        className="!w-[90%] !absolute !bottom-[10vh] sm:!bottom-[15vh] !mx-auto"
      >
        <Alert
          severity="success"
          variant="filled"
          className="sm:w-full sm:!text-2xl sm:h-[100px] sm:!my-auto"
        >
          Chegaremos a sua mesa o mais rapido possivel
        </Alert>
      </Snackbar>

      <Box className="absolute bottom-0 w-full h-[30px] sm:h-[60px] bg-[#F5F5F5]">
        <Typography className="text-center sm:!text-2xl">
          Powered by RosenTech Solutions
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      sx={{ '& .MuiDrawer-paper': { overflowX: 'hidden' } }}
    >
      {DrawerList}
    </Drawer>
  );
};

export default SideBar;
