
import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('evb-flyout', () => {

  let page: E2EPage;

  beforeEach(async () => page = await newE2EPage());

  it('should render a evb-flyout', async () => {
    await page.setContent(`<evb-flyout></evb-flyout>`);

    const el = await page.find('evb-flyout');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should render a heading', async () => {
    await page.setContent(`<evb-flyout header="test"></evb-flyout>`);

    const el = await page.find('evb-flyout');
    expect(el).not.toBeNull();
    await el.callMethod('toggle'); // open

    await page.waitForChanges();

    const header = await page.find('evb-flyout >>> evb-header');
    expect(header).not.toBeNull();
    expect(header.textContent).toBe('test');
  });

  it('should close with button', async () => {
    await page.setContent(`<evb-flyout header="test"></evb-flyout>`);

    const el = await page.find('evb-flyout');
    expect(el).not.toBeNull();
    await el.callMethod('toggle'); // open

    await page.waitForChanges();
    expect(el).toHaveClass('flyout--open');

    const button = await page.find('evb-flyout >>> .close');
    expect(button).not.toBeNull();
    await button.click();

    await page.waitForChanges();
    expect(el).not.toHaveClass('flyout--open');
  });
});
