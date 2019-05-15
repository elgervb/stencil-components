
import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('evb-filepreview', () => {

  let page: E2EPage;

  beforeEach(async () => page = await newE2EPage());

  it('should render a evb-filepreview', async () => {
    await page.setContent(`<evb-filepreview></evb-filepreview>`);

    const el = await page.find('evb-filepreview');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should render a caption', async () => {
    await page.setContent(`<evb-filepreview
      caption="evb caption"
      src="data:image/png;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="></evb-filepreview>`
    );

    const el = await page.find('evb-filepreview >>> figure');
    expect(el).not.toBeNull();
    expect(el.textContent).toBe('evb caption');
  });
});
