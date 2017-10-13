import React from 'react';
import HelloWorld from '../HelloWorld';

describe('HelloWorld', () => {
  test('renders correcly', () => {
    expect((<HelloWorld />)).toMatchSnapshot();
  });
});
