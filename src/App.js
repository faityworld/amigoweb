import React, { Component } from 'react';
//import Main from './components/main/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import DynamicLoader from './DynamicLoader';
const Main = React.lazy(() => import('./components/main/Main'))
//import DynamicLoader from './components/dynamicLoader/DynamicLoader';


const store = ConfigureStore();


class App extends Component {
  
  render() {
    return (
      <Provider store = {store}>
      <BrowserRouter>
        <DynamicLoader comp={Main} />
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

