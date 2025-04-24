import { RemoveCircleOutline } from '@mui/icons-material';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface Item {
  quantity: number;
  name: string;
}
interface TableItemsProps {
  initialItems: Item[];
  remove: boolean;
  handleDeleteItemFromCart?: (itemName: string, itemQuantity: number) => void;
}
const TableItems: React.FC<TableItemsProps> = ({
  initialItems,
  remove,
  handleDeleteItemFromCart,
}) => {
  return (
    <TableContainer
      component={Paper}
      className="bg-white !w-[85vw] sm:!w-[70vw] mx-auto mb-[10vh] mt-[5vh] !rounded-[12px] !shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)]"
    >
      <Table>
        <TableHead>
          <TableRow className="bg-[#F5F5F5]">
            <TableCell className="!font-bold !text-[0.9rem] sm:!text-2xl !p-[12px]">
              Quantidade
            </TableCell>
            <TableCell
              align="left"
              className="!font-bold !text-[0.9rem] sm:!text-2xl !p-[12px]"
            >
              Item
            </TableCell>
            {remove && (
              <TableCell className="!font-bold !text-[0.9rem] sm:!text-2xl !p-[12px]">
                Remover
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {initialItems.map((item, index) => (
            <TableRow
              key={index}
              className="odd:bg-[#FAFAFA] !hover:bg-[#EEEEEE] !transition-colors !duration-300"
            >
              <TableCell className="!font-bold text-left sm:!text-xl">
                {item.quantity + 'x'}
              </TableCell>
              <TableCell
                align="left"
                className="text-[#333] font-medium sm:!text-xl p-[10px]"
              >
                {item.name}
              </TableCell>
              {remove && handleDeleteItemFromCart && (
                <TableCell className="text-center">
                  <IconButton
                    onClick={() => handleDeleteItemFromCart(item.name, 1)}
                    className="!text-[#D32F2F]"
                  >
                    <RemoveCircleOutline
                      fontSize="small"
                      className="sm:!w-[30px] sm:!h-[40px]"
                    />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableItems;
