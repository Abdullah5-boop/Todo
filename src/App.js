import logo from './logo.svg';
import './App.css';
import Page from './component/Page';
import { Provider } from 'react-redux/es/exports';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Page></Page>
      </div>
    </Provider>
  );
}

export default App;
