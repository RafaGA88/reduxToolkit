import { Provider } from 'react-redux';
import Router from './routes/Router';
import store from './store';
import Modal from 'react-modal';

Modal.setAppElement("#root");

function App() {

  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
