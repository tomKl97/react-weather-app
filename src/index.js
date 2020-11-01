import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';


ReactDOM.render(
    <div>
        <BrowserRouter>
        <Routes/>
        </BrowserRouter>

    </div>,
  document.getElementById('root')
);

