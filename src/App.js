import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <div>
    <Head />
    <Body />
    </div>
    </Provider>

  );
}

export default App;
