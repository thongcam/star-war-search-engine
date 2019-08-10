import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import combiner from './store/combiner';
import './style/index.css';
import App from './containers/App';
import 'tachyons';

const store = combiner();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
