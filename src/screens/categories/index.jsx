import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import CategoryItem from '../../components/category-item';
import { selectCategory } from '../../store/actions/categories.action';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Plantas', {
      title: item.title,
      color: item.color,
    });
  };

  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={categories} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Categories;
