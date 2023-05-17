import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

const PlantaItem = ({ item, onSelected, color }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.contentContainer, backgroundColor: color }}
        onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.name}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.cuidados}>{item.cuidados}</Text>
          <Text style={styles.beneficios}>{item.beneficios}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlantaItem;
