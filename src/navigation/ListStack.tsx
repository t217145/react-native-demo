import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ListScreen from '../screens/List/ListScreen';
import DetailScreen from '../screens/List/Detail/DetailScreen';
import {getScreenOptions} from './navigation.options';
import {useTheme} from '../context/ThemeContext';

const Stack = createStackNavigator();

const ListStack = (): JSX.Element => {
  const {theme} = useTheme();
  const screenOptions = getScreenOptions(theme);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{title: 'List'}}
      />
      <Stack.Screen
        name="ListDetail"
        component={DetailScreen}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};

export default ListStack;
