import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import jest from ''

import { shallow, mount } from './enzyme'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });



it('shoud be true', () => {
  expect(true).toBe(true)
})

test("sould be create with container div", () => {
  let cart = [];
  let loadCart = function () { return [] }; // mock
  const wrapper = mount(<App cart={cart} loadCart={loadCart} />)
  let ele = wrapper.find('nav a')
  expect(ele.text()).toBe('online shopping');
})
