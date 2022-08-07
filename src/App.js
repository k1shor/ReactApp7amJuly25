import logo from './logo.svg';
import './App.css';
// import First from './components/First';
import Second from './components/Second';
import MyRoutes from './MyRoutes';
import GlobalContextProvider from './components/GlobalContext';
import { Provider } from 'react-redux';
import store from './reducer/store';

function App() {


  return (
    <div>
      <Provider store={store}>
      <GlobalContextProvider>
      <MyRoutes/>
      </GlobalContextProvider>
      </Provider>
    </div>
  );
}

export default App;
