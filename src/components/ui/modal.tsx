import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Modal, Typography } from '@mui/material';

interface ModalProps {
  open: boolean;
  close: () => void;
  message: string;
}

const SuccessModal: React.FC<ModalProps> = ({ open, close, message }) => {
  return (
    <Modal
      open={open}
      onClose={close}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        width="80vw"
        height="40vh"
        gap={2}
        sx={{ backgroundColor: 'white' }}
        margin="auto"
        textAlign="center"
        borderRadius={2}
        boxShadow={3}
        p={4}
      >
        <CheckCircleOutline
          color="success"
          sx={{ marginX: 'auto', width: '40%', height: '40%' }}
        />
        <Typography variant="h5">{message}</Typography>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
