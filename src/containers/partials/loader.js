import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {style} from '../../assets/theme';

export default (loader = () => {
  return (
    <View style={[style.container, style.center]}>
      <ActivityIndicator />
    </View>
  );
});
