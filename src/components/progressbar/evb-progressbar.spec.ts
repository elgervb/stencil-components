import { EvbProgressBar } from './evb-progressbar';

describe('EvbProgressBar', () => {
  let component: EvbProgressBar;

  beforeEach(() => component = new EvbProgressBar());

  it('should render', () => {
    expect(component.render()).toMatchSnapshot();
  });

  describe('progress', () => {

    it('should have a default data-progress attribute on the host', () => {
      const hostData = component.hostData();
      expect(hostData['data-progress']).toBe(0);
    });

    it('should have data-progress attribute on the host which reflects the progress', () => {
      const expected = 88;
      component.progress = expected;
      const hostData = component.hostData();
      expect(hostData['data-progress']).toBe(expected);
    });
  });
});
