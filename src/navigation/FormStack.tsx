import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Form from '../screens/Form/FormScreen';
import {getScreenOptions} from './navigation.options';
import {useTheme} from '../context/ThemeContext';

const Stack = createStackNavigator();

const FormStack = (): JSX.Element => {
  const {theme} = useTheme();
  const screenOptions = getScreenOptions(theme);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
};

export default FormStack;
