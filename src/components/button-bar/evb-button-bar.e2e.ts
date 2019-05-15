
import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('evb-button-bar', () => {

  let page: E2EPage;

  beforeEach(async () => page = await newE2EPage());

  it('should render a evb-button-bar', async () => {
    await page.setContent(`<evb-button-bar></evb-button-bar>`);

    const el = await page.find('evb-button-bar');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should render the slot', async () => {
    await page.setContent(`<evb-button-bar><p>my slot</p></evb-button-bar>`);

    const el = await page.find('evb-button-bar p');
    expect(el).not.toBeNull();
    expect(el.textContent).toBe('my slot');
  });
});
