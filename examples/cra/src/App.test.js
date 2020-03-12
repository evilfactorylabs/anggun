import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('I am the box', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('button1')).toHaveTextContent(/i am the box/i)
  expect(getByTestId('button1')).toMatchSnapshot()
})

test('Box with border radius', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('border-radius')).toHaveTextContent(/box with border radius/i)
  expect(getByTestId('border-radius')).toMatchSnapshot()
})

// if our want implement style assertation
//
/*
 * @see {https://github.com/testing-library/jest-dom#tohavestyle}
  expect(container).toHaveStyle(`
          boxSizing: 'border-box';
                  display: flex;
                          flexWrap: 'wrap';
                                  width: '100%';
                                        `);
                                        */
