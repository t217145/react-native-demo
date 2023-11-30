import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Draw from '../screens/Draw/DrawScreen';
import {getScreenOptions} from './navigation.options';
import {useTheme} from '../context/ThemeContext';

const Stack = createStackNavigator();

const DrawStack = (): JSX.Element => {
  const {theme} = useTheme();
  const screenOptions = getScreenOptions(theme);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Draw" component={Draw} />
    </Stack.Navigator>
  );
};

export default DrawStack;
