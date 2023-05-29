import React, { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { PlantaItem } from '../../components';
import { filterPlants, selectPlant } from '../../store/actions';

const Plantas = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.selected);
  const filteredPlants = useSelector((state) => state.plants.filteredPlants);

  const onSelected = (item) => {
    dispatch(selectPlant(item.id));
    navigation.navigate('Planta', {
      name: item.title,
    });
  };

  useEffect(() => {
    dispatch(filterPlants(category.id));
  }, []);

  const renderItem = ({ item }) => (
    <PlantaItem item={item} onSelected={onSelected} color={category.color} />
  );
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={filteredPlants} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Plantas;
