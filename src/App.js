import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import store from './redux/store';
import {ThemeProvider, Button} from 'react-native-elements';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
