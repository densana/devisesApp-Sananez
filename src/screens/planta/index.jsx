import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { PLANTAS } from '../../constants';

const Planta = ({ route }) => {
  const { plantaId } = route.params;
  const planta = PLANTAS.find((planta) => planta.id === plantaId);

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={{ uri: planta.image }} />
      <Text style={styles.name}>{planta.title}</Text>
      <Text style={styles.description}>{planta.description}</Text>
      <Text style={styles.cuidados}>{planta.cuidados}</Text>
      <Text style={styles.beneficios}>{planta.beneficios}</Text>
    </View>
  );
};

export default Planta;
