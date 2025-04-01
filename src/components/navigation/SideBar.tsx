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
    <Box sx={{ width: '60vw', paddingTop: '5vh' }} role="presentation">
      <IconButton
        sx={{ position: 'absolute', right: '10px', top: '2vh' }}
        onClick={toggleDrawer(false)}
      >
        <Close />
      </IconButton>
      <Box className="pl-6">
        <Typography> Cucinna Italia </Typography>
        <Typography>Mesa #23</Typography>
      </Box>
      <List sx={{ paddingY: '25px' }}>
        {arrayItens.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            className=""
            // sx={{
            //   '&:nth-child(even)': { backgroundColor: '#F5F5F5' },
            // }}
          >
            <ListItemButton onClick={() => handleItemClick(item)}>
              <ListItemIcon>
                {index === 0 && <LocalPizzaOutlined />}
                {index === 1 && <LocalPizza />}
                {index === 2 && <DinnerDining />}
                {index === 3 && <LocalDrink />}
                {index === 4 && <ListAlt />}
              </ListItemIcon>
              <ListItemText
                primary={
                  <span className="text-black text-lg scale-x-105 yellow-underline">
                    {item}
                  </span>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {arrayOptions.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            // sx={{
            //   '&:nth-child(even)': { backgroundColor: '#F5F5F5' },
            // }}
          >
            <ListItemButton onClick={() => handleActionClick(item)}>
              <ListItemIcon>
                {index === 0 && <History />}
                {index === 1 && <PersonAdd />}
                {index === 2 && <Payments />}
              </ListItemIcon>
              <ListItemText
                primary={
                  <span className="text-black text-lg underline yellow-underline">
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
        sx={{
          width: '90%',
          position: 'absolute',
          bottom: '20vh',
          marginX: 'auto',
        }}
      >
        <Alert severity="success" variant="filled">
          Chegaremos a sua mesa o mais rapido possivel
        </Alert>
      </Snackbar>

      <Box position="absolute" bottom={0} width="100%" height="20px">
        <Typography sx={{ backgroundColor: '#F5F5F5' }} textAlign="center">
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
