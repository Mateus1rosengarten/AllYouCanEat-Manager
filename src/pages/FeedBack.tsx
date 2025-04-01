import { Box, Rating, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/navigation/Footer';
import SuccessModal from '../components/ui/modal';

interface AvaliationType {
  rating: number | null;
  description: string;
}

const FeedBack: React.FC = () => {
  const [avaliation, setAvaliation] = useState<AvaliationType>({
    rating: null,
    description: '',
  });
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [messageHelper, setMessageHelper] = useState<{
    text: string;
    status: string;
  }>({
    text: '* Sua nota e avaliação serão enviadas de maneira anonima',
    status: 'standard',
  });
  const navigate = useNavigate();

  const location = useLocation();
  const { name, description } = location.state ?? {
    name: 'Sabor Desconhecido',
    description: 'Descrição não disponível.',
  };

  useEffect(() => {
    console.log(
      'Start :  ',
      avaliation.rating,
      'Text :',
      avaliation.description
    );
  }, [avaliation]);

  const handleOnChange = (
    value: string | number,
    key: keyof AvaliationType
  ) => {
    setAvaliation((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleOpenModal = () => {
    if (!avaliation.rating && !avaliation.description) {
      setMessageHelper({
        ...messageHelper,
        text: '* Para avaliar o sabor, é necessário dar uma nota ou um texto',
        status: 'error',
      });
      return;
    }

    setOpenModal(true);
    handleAutoClose();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAutoClose = () => {
    setTimeout(() => {
      setOpenModal(false);
      navigate(-1);
    }, 3000);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1vh',
        paddingTop: '6vh',
      }}
    >
      <SuccessModal
        open={openModal}
        close={() => handleCloseModal()}
        message="Feedback realizado com sucesso,Obrigado!"
      />
      <Typography
        width="80%"
        textAlign="center"
        variant="h4"
        className="yellow-underline"
      >
        {name}
      </Typography>
      <Typography variant="body1" color="grey">
        {description}
      </Typography>

      <Rating
        size="large"
        onChange={(_, newValue) => handleOnChange(newValue ?? 0, 'rating')}
      />
      <TextField
        onChange={(event) => handleOnChange(event.target.value, 'description')}
        label="O que voce achou desse sabor?"
        helperText={messageHelper.text}
        // color={messageHelper.status === 'standard' ? 'success' : 'error'}
        color="success"
        sx={{
          width: '90vw',
          marginTop: '6vh',
          '& .MuiInputBase-input': {
            fontSize: '1.2rem',
          },
          '& .MuiInputLabel-root': {
            fontSize: '1.2rem',
          },
          '& .MuiInputLabel-shrink': {
            fontSize: '0.83rem',
          },

          '& .MuiFormHelperText-root': {
            color: messageHelper.status === 'error' ? 'red' : 'green',
          },
        }}
        multiline
        rows={7}
      />

      <Footer handleOnClick={() => handleOpenModal()} />
    </Box>
  );
};

export default FeedBack;
