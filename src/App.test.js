import React from 'react';
import ReactDOM from 'react-dom';
import ProjectOmegaApplication from './ProjectOmegaApplication';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectOmegaApplication />, div);
  ReactDOM.unmountComponentAtNode(div);
});
