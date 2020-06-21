import { newE2EPage } from '@stencil/core/testing';

describe('evb-colorselect', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<evb-colorselect></evb-colorselect>');

    const element = await page.find('evb-colorselect');
    expect(element).toHaveClass('hydrated');
  });
});
