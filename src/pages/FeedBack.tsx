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
  const [animate, setAnimate] = useState(false);

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

  const handleRatingClick = (newValue: number | null) => {
    if (newValue !== null) {
      handleOnChange(newValue, 'rating'); // salva a nota

      setAnimate(true); // ativa a classe
      setTimeout(() => setAnimate(false), 300); // remove depois de 300ms
    }
  };

  return (
    <Box className="flex flex-col items-center gap-4 pt-[6vh] pb-[15vh]">
      <SuccessModal
        open={openModal}
        close={() => handleCloseModal()}
        message="Feedback realizado com sucesso,Obrigado!"
      />
      <Typography className="!font-medium w-4/5 text-center !text-4xl sm:!text-6xl underline decoration-yellow-400">
        {name}
      </Typography>
      <Typography className="text-gray-500 sm:!text-2xl">
        {description}
      </Typography>

      <Rating
        size="large"
        onChange={(_, newValue) => handleRatingClick(newValue)}
        className={animate ? 'animate-stars' : ''}
      />
      <TextField
        onChange={(event) => handleOnChange(event.target.value, 'description')}
        label="O que voce achou desse sabor?"
        helperText={messageHelper.text}
        color="success"
        className="w-[90vw] !mt-[6vh] sm:!mt-[2vh]"
        sx={{
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
