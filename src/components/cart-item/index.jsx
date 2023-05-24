import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../constants';

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.title}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.content}>
          <Text style={styles.cuidados}>{item.cuidados}</Text>
          <Text style={styles.beneficios}>{item.beneficios}</Text>
        </View>
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <Ionicons name="trash" size={22} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
