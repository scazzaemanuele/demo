import { render } from '@testing-library/react';

import ImageMagnifier from './image-magnifier';

describe('ImageMagnifier', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageMagnifier />);
    expect(baseElement).toBeTruthy();
  });
});
