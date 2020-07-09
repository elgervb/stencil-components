import { newE2EPage } from '@stencil/core/testing';

describe('evb-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<evb-icon></evb-icon>');

    const element = await page.find('evb-icon');
    expect(element).toHaveClass('hydrated');
  });
});
