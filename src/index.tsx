import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import SearchSpecialist from './feature/SearchSpecialist';
import GlobalStyle from './globalStyles';
import { store } from './store';


const App: React.FC = () => {
  return <Provider store={store}>
    <GlobalStyle />
    <SearchSpecialist />
  </Provider>;
};

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(<App />);