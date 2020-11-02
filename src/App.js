
import React from 'react'
import  Router  from './routes'
import GlobalStyles from './styles/global'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router/>
      <GlobalStyles/>
    </Provider>
  );
}

export default App;
