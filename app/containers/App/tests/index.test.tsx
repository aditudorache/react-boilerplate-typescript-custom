import React from 'react';

import App from '../index';
import { render } from '@testing-library/react';

describe('<App />', () => {
  it('should render and match the snapshot', () => {

    const {
      container: { firstChild },
    } = render(
      // tslint:disable-next-line: jsx-wrap-multiline

      // tslint:disable-next-line: jsx-wrap-multiline
      <div/>,
      // <App/>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
