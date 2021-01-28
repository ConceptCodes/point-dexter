import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Newtab from './Newtab';
import './index.css';

render(<Newtab />, window.document.querySelector('#app-container'));
