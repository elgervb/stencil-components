import { newE2EPage } from '@stencil/core/testing';

describe('evb-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<evb-list-item></evb-list-item>');

    const element = await page.find('evb-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
