import { newE2EPage } from '@stencil/core/testing';

describe('evb-collection', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<evb-collection></evb-collection>');
    const element = await page.find('evb-collection');
    expect(element).toHaveClass('hydrated');
  });

  //   it('renders changes to the heading data', async () => {
  //     const page = await newE2EPage();

  //     await page.setContent('<evb-collection></evb-collection>');
  //     const component = await page.find('evb-collection');
  //     const header = await page.find('evb-collection >>> evb-header >>> .header');
  //     expect(header).toBeTruthy();
  //     console.log(header.outerHTML);
  //     expect(header.textContent).toEqual('');

  //     component.setProperty('heading', 'qwerty');
  //     await page.waitForChanges();
  //     expect(header.textContent).toEqual(`qwerty`);
  //   });
});
