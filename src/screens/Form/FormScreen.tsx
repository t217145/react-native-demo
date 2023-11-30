﻿import React from 'react';
import {Text, View} from 'react-native';

import {getStyles} from './FormScreen.style';
import {useTheme} from '../../context/ThemeContext';

const FormScreen = (): JSX.Element => {
  const {theme} = useTheme();
  const styles = React.useMemo(() => getStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>FormScreen</Text>
    </View>
  );
};

export default FormScreen;
