import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { styles } from './styles';
import CategoryItem from '../../components/category-item';
import { CATEGORIES } from '../../constants';

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate('Plantas', {
      categoryId: item.id,
      title: item.title,
      color: item.color,
    });
  };

  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={CATEGORIES} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Categories;
