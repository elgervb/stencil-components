import { EvbFilePreview } from './evb-file-preview';

describe('EvbFilePreview', () => {
  let component: EvbFilePreview;

  beforeEach(() => component = new EvbFilePreview());

  it('should render', () => {
    component.src = '/image.png';
    expect(component.render()).toMatchSnapshot();
  });

  it('should not render when image is not set', () => {
    component.src = undefined;
    expect(component.render()).toBe('');
    expect(component.render()).toMatchSnapshot();
  });
});
