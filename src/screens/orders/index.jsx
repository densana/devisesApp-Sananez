import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';
import { OrdersItem } from '../../components';
import { ORDERS } from '../../constants';

const Orders = () => {
  const onRemove = (id) => {
    console.warn(id);
  };
  const renderItem = ({ item }) => <OrdersItem item={item} onRemove={onRemove} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
    </View>
  );
};

export default Orders;
