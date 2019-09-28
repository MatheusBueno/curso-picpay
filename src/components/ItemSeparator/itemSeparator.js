import React from 'react';
import { View } from 'react-native';

const ItemSeparator = ({ marginHorizontal }) => {
  return (
    <View
      style={{
        height: 0.4,
        marginHorizontal,
        backgroundColor: '#C7CECE'
      }}
    />
  );
};

export default ItemSeparator;
