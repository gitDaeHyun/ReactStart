import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const container = document.getElementById('root');
if(!container) throw new Error('Failed to find root element')

ReactDOM.render(<App />,container);

