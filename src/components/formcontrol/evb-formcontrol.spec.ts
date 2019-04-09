import { EvbFormControl } from "./evb-formcontrol";

describe('EvbFormControl', () => {
  let component: EvbFormControl;

  beforeEach(() => component = new EvbFormControl());

  it('should render', () => {
    expect(component.render()).toMatchSnapshot();
  });
});
