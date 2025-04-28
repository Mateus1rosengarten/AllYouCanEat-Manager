import { ListAlt, Send, WestOutlined } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMenuHandlers } from '../../../utils/menuFunctions';

interface FooterProps {
  handleOnClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ handleOnClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { menu } = useMenuHandlers();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleConfirmation = () => {
    navigate('/confirmation');
  };

  const itsHighlighted =
    location.pathname === '/confirmation' && menu.length > 0;
  return (
    // <BottomNavigation
    //   className="h-10"
    //   sx={{
    //     '& .MuiTouchRipple-child': {
    //       backgroundColor: '#FFD35A',
    //     },
    //     position: 'fixed',
    //     bottom: '0',
    //     boxShadow: '0 -4px 10px rgba(0,0,0,0.2)',
    //     width: '100%',
    //     minHeight: '56px',
    //   }}
    // >
    <BottomNavigation className="sm:!justify-evenly h-10 sm:!h-[100px] fixed bottom-0 w-full min-h-[56px] shadow-[0_-4px_10px_rgba(0,0,0,0.2)] [&_.MuiTouchRipple-child]:bg-[#FFD35A]">
      <BottomNavigationAction
        icon={
          <WestOutlined
            htmlColor="#0000008A"
            className="sm:!w-[40px] sm:!h-[40px] transform active:[transform:scale(1.3)]"
          />
        }
        onClick={handleGoBack}
      />
      <BottomNavigationAction
        icon={
          <ListAlt htmlColor="#FFD35A" className="sm:!w-[40px] sm:!h-[50px]" />
        }
        onClick={handleConfirmation}
      />
      <BottomNavigationAction
        icon={
          <Send
            className="sm:!w-[40px] sm:!h-[40px]"
            htmlColor={itsHighlighted ? 'black' : '#0000008A'}
            sx={{
              animation: itsHighlighted
                ? 'pulse 1s infinite alternate ease-in-out'
                : 'none',
            }}
          />
        }
        onClick={handleOnClick}
        className="transform active:[transform:scale(1.3)]"
        sx={{
          backgroundColor: itsHighlighted ? '#FFD35A' : 'transparent',
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)', opacity: 1 },
            '100%': { transform: 'scale(1.3)', opacity: 0.8 },
          },
        }}
      />
    </BottomNavigation>
  );
};

export default Footer;
