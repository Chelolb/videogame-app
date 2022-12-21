import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import Main from './src/navigations/Main';
import store from './store';



export default function App() {
  return (
    <Provider store={store}>
        <Main/>
    </Provider>
  );
}