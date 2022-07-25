import logo from './logo.svg';
import './App.css';
// import First from './components/First';
import Second from './components/Second';
import MyRoutes from './MyRoutes';
import GlobalContextProvider from './components/GlobalContext';

function App() {
  return (
    <div>
      <GlobalContextProvider>
      <MyRoutes/>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
