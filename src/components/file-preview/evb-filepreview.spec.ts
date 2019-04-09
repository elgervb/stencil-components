import { EvbFilePreview } from './evb-file-preview';

describe('EvbFilePreview', () => {
  let component: EvbFilePreview;

  beforeEach(() => component = new EvbFilePreview());

  it('should render', () => {
    expect(component.render()).toMatchSnapshot();
  });
});
