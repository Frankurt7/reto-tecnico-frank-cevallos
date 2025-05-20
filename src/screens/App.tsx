import { Provider } from 'react-redux';
import Router from './AppRouter';
import store from 'core/store';

const App = () => (
  <>
    <Provider store={store}>
      <Router />
    </Provider>
  </>
);

export default App;
