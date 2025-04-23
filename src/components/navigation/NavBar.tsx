import { MenuRounded } from '@mui/icons-material';
import { AppBar, IconButton } from '@mui/material';
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
        className="h-[40vh] sm:h-[50vh] !bg-white/15 border-x border-b-4 sm:border-b-8 border-[#2e7d32] rounded-b-[15%] sm:rounded-b-[25%] shadow-lg"
      >
        <IconButton
          onClick={handleOpenDrawer}
          className="absolute left-6 sm:left-20 top-6 sm:top-10 w-2"
        >
          <MenuRounded htmlColor="#0000008A" className="sm:!text-5xl" />
        </IconButton>

        <img
          src={src}
          alt="Logo do Restaurante"
          className="w-[250px] object-contain m-auto sm:w-[600px]"
        />
      </AppBar>
    </>
  );
};

export default NavBar;
