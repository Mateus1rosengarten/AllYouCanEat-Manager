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
      sx={{
        backgroundColor: '#FFF',
        width: '85vw',
        marginX: 'auto',
        marginBottom: '10vh',
        marginTop: '5vh',
        borderRadius: '12px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#F5F5F5' }}>
            <TableCell
              sx={{ fontWeight: 'bold', fontSize: '0.9rem', padding: '12px' }}
            >
              Quantidade
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: 'bold', fontSize: '0.9rem', padding: '12px' }}
            >
              Item
            </TableCell>
            {remove && (
              <TableCell
                sx={{ fontWeight: 'bold', fontSize: '0.9rem', padding: '12px' }}
              >
                Remover
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {initialItems.map((item, index) => (
            <TableRow
              key={index}
              sx={{
                '&:nth-of-type(even)': { backgroundColor: '#FAFAFA' },
                '&:hover': { backgroundColor: '#EEEEEE' },
                transition: 'background-color 0.3s ease',
              }}
            >
              <TableCell sx={{ fontWeight: '600', textAlign: 'left' }}>
                {item.quantity + 'x'}
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: '#333', fontWeight: '500', padding: '10px' }}
              >
                {item.name}
              </TableCell>
              {remove && handleDeleteItemFromCart && (
                <TableCell sx={{ textAlign: 'center' }}>
                  <IconButton
                    onClick={() => handleDeleteItemFromCart(item.name, 1)}
                    sx={{ color: '#D32F2F' }}
                  >
                    <RemoveCircleOutline fontSize="small" />
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
