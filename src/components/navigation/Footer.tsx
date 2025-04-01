import { ListAlt, Send, WestOutlined } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

interface FooterProps {
  handleOnClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ handleOnClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleConfirmation = () => {
    navigate('/confirmation');
  };

  const itsHighlighted = location.pathname === '/confirmation';
  return (
    <BottomNavigation
      className="h-10"
      sx={{
        '& .MuiTouchRipple-child': {
          backgroundColor: '#FFD35A',
        },
        position: 'fixed',
        bottom: '0',
        boxShadow: '0 -4px 10px rgba(0,0,0,0.2)',
        width: '100%',
        minHeight: '56px',
      }}
    >
      <BottomNavigationAction
        icon={<WestOutlined htmlColor="#0000008A" />}
        onClick={handleGoBack}
      />
      <BottomNavigationAction
        icon={<ListAlt htmlColor="#FFD35A" />}
        onClick={handleConfirmation}
      />
      <BottomNavigationAction
        icon={
          <Send
            htmlColor={itsHighlighted ? 'black' : '#0000008A'}
            sx={{
              animation: itsHighlighted
                ? 'pulse 1s infinite alternate ease-in-out'
                : 'none',
            }}
          />
        }
        onClick={handleOnClick}
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
