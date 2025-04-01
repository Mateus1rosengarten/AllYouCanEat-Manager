import { MenuRounded } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { useState } from 'react';
import SideBar from './SideBar';

interface NavBarProps {
  src: string;
}

const NavBar: React.FC<NavBarProps> = ({ src }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <>
      <SideBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <AppBar
        position="static"
        elevation={0}
        component="header"
        color="transparent"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '40vh',
          position: 'relative',
          borderBottom: '4px solid #2e7d32',
          borderLeft: '1px solid #2e7d32',
          borderRight: '1px solid #2e7d32',
          borderBottomLeftRadius: '15%',
          borderBottomRightRadius: '15%',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Toolbar className="flex w-[100vw] justify-between bg-white h-10">
          <IconButton size="large" onClick={handleOpenDrawer}>
            <MenuRounded htmlColor="#0000008A" />
          </IconButton>
        </Toolbar>
        <img
          src={src}
          alt="Logo do Restaurante"
          style={{
            width: '300px',
            height: '300px',
            objectFit: 'contain',
            margin: 'auto',
          }}
        />
      </AppBar>
    </>
  );
};

export default NavBar;
