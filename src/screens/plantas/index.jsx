import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { styles } from './styles';
import { PlantaItem } from '../../components';
import { PLANTAS } from '../../constants/data/plantas';

const Plantas = ({ navigation, route }) => {
  const { categoryId, color } = route.params;
  const onSelected = (item) => {
    navigation.navigate('Planta', {
      plantaId: item.id,
      name: item.title,
    });
  };
  const filteredplantas = PLANTAS.filter((planta) => planta.categoryId === categoryId);

  const renderItem = ({ item }) => <PlantaItem item={item} onSelected={onSelected} color={color} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={filteredplantas} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Plantas;
