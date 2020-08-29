import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Drawer from './navigation/Drawer';

const App = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default App;
