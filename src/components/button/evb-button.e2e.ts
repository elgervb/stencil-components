import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('evb-button', () => {

  let page: E2EPage;

  beforeEach(async () => page = await newE2EPage());

  it('should render a evb-button', async () => {
    await page.setContent(`<evb-button></evb-button>`);

    const el = await page.find('evb-button');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should render as a button', async () => {
    await page.setContent(`<evb-button type="button"></evb-button>`);

    const el = await page.find('evb-button >>> button');
    expect(el).not.toBeNull();
  });

  it('should render as a link', async () => {
    await page.setContent(`<evb-button href="http://localhost"></evb-button>`);

    const el = await page.find('evb-button >>> a');
    expect(el).not.toBeNull();
    expect(el).toHaveAttribute('href');

  });

  it('should render as a ghost', async () => {
    await page.setContent(`<evb-button ghost="true"></evb-button>`);

    const el = await page.find('evb-button >>> button');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('ghost');
  });

  it('should render as a pill', async () => {
    await page.setContent(`<evb-button pill="true"></evb-button>`);

    const el = await page.find('evb-button >>> button');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('pill');
  });

});
