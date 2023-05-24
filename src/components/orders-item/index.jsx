import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../constants';

const OrdersItem = ({ items, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.cuidados}>Planta</Text>
        </View>
        <TouchableOpacity onPress={() => onRemove(items.id)}>
          <Ionicons name="trash" size={22} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrdersItem;
