import { newE2EPage } from '@stencil/core/testing';

describe('evb-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<evb-list></evb-list>');

    const element = await page.find('evb-list');
    expect(element).toHaveClass('hydrated');
  });
});
