import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('I am the box', () => {
  const { getByTestId } = render(<App />);
    expect(getByTestId("button1")).toHaveTextContent(/i am the box/i)
    expect(getByTestId("button1")).toMatchSnapshot()
});

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
