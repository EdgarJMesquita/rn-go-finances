import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import theme from '../../global/theme';
import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={30} color={theme.colors.primary} />
    </View>
  );
}
