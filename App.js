import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/TodoContext';
import CreateScreen from './src/screens/CreateScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Create: CreateScreen
  }, 
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: "ToDo App"
    }
  }
  )

const App = createAppContainer(navigator);

export default() => {
  return (
    <Provider>
      <App />
    </Provider>
  );
}