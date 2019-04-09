import { EvbButtonBar } from './evb-button-bar';

describe('EvbButtonBar', () => {
  let component: EvbButtonBar;

  beforeEach(() => component = new EvbButtonBar());

  it('should render', () => {
    expect(component.render()).toMatchSnapshot();
  });
});
