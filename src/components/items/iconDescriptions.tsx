import { Favorite, RateReviewOutlined, Spa } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import milkIcon from '/utils/images/milk.png';

const IconDescriptions: React.FC = () => {
  return (
    <Box className="flex flex-col gap:2 sm:gap-10 mx-auto mt-10 sm:mt-14 border w-3/4 sm:w-[650px] bg-white border-gray-300 rounded-lg shadow-md p-4 sm:p-10">
      <Box className="grid grid-cols-2 gap-4 items-center">
        <Box className="flex items-center">
          <IconButton>
            <Spa
              color="success"
              fontSize="small"
              className="sm:!w-10 sm:!h-8"
            />
          </IconButton>
          <Typography variant="body1" className="sm:!text-2xl">
            * Vegetariano
          </Typography>
        </Box>

        <Box className="flex items-center">
          <IconButton className="!pt-3 sm:!pt-4">
            <RateReviewOutlined
              fontSize="small"
              className="sm:!w-10 sm:!h-8"
              htmlColor="#0000008A"
            />
          </IconButton>
          <Typography variant="body1" className="sm:!text-2xl pt-1">
            * Avalie Sabor
          </Typography>
        </Box>
      </Box>

      <Box className="grid grid-cols-2 gap-4 items-center">
        <Box className="flex items-center gap-[6px]">
          <img
            src={milkIcon}
            alt="Sem Lactose"
            className="w-6 h-6 ml-[6px] sm:w-10 sm:h-8"
          />
          <Typography variant="body1" className="sm:!text-2xl">
            * Sem Lactose
          </Typography>
        </Box>
        <Box className="flex items-center">
          <IconButton className="!pt-3">
            <Favorite
              fontSize="small"
              className="text-yellow-400 sm:!w-10 sm:!h-8"
              htmlColor="yellow"
            />
          </IconButton>
          <Typography variant="body1" className="sm:!text-2xl pt-1">
            * Favoritos
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default IconDescriptions;
