import React from 'react'
import AppNavigation from './src/routes'
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'}/>
      <AppNavigation />
    </>
  );
}

export default App