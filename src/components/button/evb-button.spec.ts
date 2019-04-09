import { EvbButton } from './evb-button';

describe('EvbButton', () => {
  let component: EvbButton;

  beforeEach(() => component = new EvbButton());

  it('should render', () => {
    expect(component.render()).toMatchSnapshot();
  });
});
