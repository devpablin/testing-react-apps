// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(<Counter />, div);
  const clickMouseEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  });
  const [decrement, increment] = div.querySelectorAll('button');
  const message = div.firstChild.querySelector('div')
  expect(message.textContent).toBe('Current count: 0');
  increment.dispatchEvent(clickMouseEvent);
  expect(message.textContent).toBe('Current count: 1');
  decrement.dispatchEvent(clickMouseEvent);
  expect(message.textContent).toBe('Current count: 0');
  div.remove();
})

/* eslint no-unused-vars:0 */
