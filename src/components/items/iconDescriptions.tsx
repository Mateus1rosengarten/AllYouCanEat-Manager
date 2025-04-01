import { FavoriteBorder, RateReviewOutlined, Spa } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import milkIcon from '/utils/images/milk.png';

const IconDescriptions: React.FC = () => {
  return (
    <Box
      className="flex flex-col mx-auto mt-10 border w-3/4 bg-white border-gray-300 rounded-lg shadow-md p-4"
      sx={{ gap: 2 }}
    >
      <Box className="grid grid-cols-2 gap-4 items-center">
        <Box className="flex items-center gap-2">
          <IconButton>
            <Spa color="success" fontSize="small" />
          </IconButton>
          <Typography variant="body1">*Vegetariano</Typography>
        </Box>
        <Box className="flex items-center gap-2">
          <img src={milkIcon} alt="Sem Lactose" className="w-6 h-6 ml-2" />
          <Typography variant="body1">* Sem Lactose</Typography>
        </Box>
      </Box>
      <Box className="grid grid-cols-2 gap-4 items-center">
        <Box className="flex items-center gap-2">
          <IconButton>
            <RateReviewOutlined fontSize="small" htmlColor="#0000008A" />
          </IconButton>
          <Typography variant="body1">* Avalie esse sabor</Typography>
        </Box>
        <Box className="flex items-center gap-2">
          <IconButton>
            <FavoriteBorder fontSize="small" htmlColor="#0000008A" />
          </IconButton>
          <Typography variant="body1">* Indique seus favoritos</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default IconDescriptions;
