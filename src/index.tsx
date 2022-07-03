import ReactDOM from 'react-dom/client';

import App from './App';

import './styles/reset.css';
import './styles/base.css';
import './styles/fonts.css';

import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);

root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);
