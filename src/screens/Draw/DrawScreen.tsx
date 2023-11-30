﻿import React from 'react';
import {Text, View} from 'react-native';

import {getStyles} from './DrawScreen.style';
import {useTheme} from '../../context/ThemeContext';

const DrawScreen = (): JSX.Element => {
  const {theme} = useTheme();
  const styles = React.useMemo(() => getStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>DrawScreen</Text>
    </View>
  );
};

export default DrawScreen;
