import React, { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/Feather';
import ptBR from 'date-fns/locale/pt-BR';

import * as S from './styles';

interface RouteParams {
  key: string;
  name: string;
  params: {
    date: number;
  };
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute<RouteParams>();

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard',
        },
      ],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(
      params.date,
      "EEEE', dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'",
      { locale: ptBR },
    );
  }, [params.date]);

  return (
    <S.Container>
      <Icon name="check" size={80} color="#04d361" />

      <S.Title>Agendamento concluído</S.Title>
      <S.Description>{formattedDate}</S.Description>

      <S.OkButton onPress={handleOkPressed}>
        <S.OkButtonText>Ok</S.OkButtonText>
      </S.OkButton>
    </S.Container>
  );
};

export default AppointmentCreated;
