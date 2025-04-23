import { Spa } from '@mui/icons-material';
import milkIcon from '/utils/images/milk.png';

interface IconsProps {
  isVeg: boolean;
  noLactose: boolean;
}

const Icons: React.FC<IconsProps> = ({ noLactose, isVeg }) => {
  return (
    <div className="ml-[6px] flex flex-row gap-1 items-center">
      {isVeg && (
        <Spa
          color="success"
          className="!w-[12px] !h-[12px] sm:!w-[20px] sm:!h-[20px] w-mt-[3px] mb-[3px] sm:mt-[4px]"
        />
      )}
      {noLactose && (
        <img
          src={milkIcon}
          alt="Custom Icon"
          className="w-[16px] h-[14px] sm:w-[24px] sm:h-[24px] pt-[1px]"
        />
      )}
    </div>
  );
};

export default Icons;
