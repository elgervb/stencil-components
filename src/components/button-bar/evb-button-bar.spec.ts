import { EvbButtonBar } from './evb-button-bar';

describe('EvbButtonBar', () => {
  let component: EvbButtonBar;

  beforeEach(() => component = new EvbButtonBar());

  it('should render', () => {
    expect(component.render()).toMatchSnapshot();
  });

  it('should add a justify class', () => {
    component.justify = 'center';

    const hostdata = component.hostData();
    expect(hostdata.class['justify-center']).toBe(true);

    expect(component.render()).toMatchSnapshot();
  });
});
