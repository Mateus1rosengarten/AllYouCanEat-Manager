import { Spa } from '@mui/icons-material';
import { Stack } from '@mui/material';
import milkIcon from '/utils/images/milk.png';
interface IconsProps {
  isVeg: boolean;
  noLactose: boolean;
}

const Icons: React.FC<IconsProps> = ({ noLactose, isVeg }) => {
  return (
    <Stack marginLeft="6px" direction="row" gap={1} alignItems="center">
      {isVeg && (
        <Spa
          color="success"
          sx={{
            marginTop: '3px',
            marginBottom: '3px',
            width: 12,
            height: 12,
          }}
        />
      )}
      {noLactose && (
        <img
          src={milkIcon}
          alt="Custom Icon"
          style={{ width: 16, height: 14, paddingTop: '1px' }}
        />
      )}
    </Stack>
  );
};

export default Icons;
