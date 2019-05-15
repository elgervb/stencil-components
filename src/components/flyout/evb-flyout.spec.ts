import { EvbFlyout } from './evb-flyout';

describe('EvbFlyout', () => {
  let component: EvbFlyout;

  beforeEach(() => component = new EvbFlyout());

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.render()).toMatchSnapshot();
  });
});
