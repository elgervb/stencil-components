import { EvbRange } from "./formcontrol-range";

describe('EvbRange', () => {
  let component: EvbRange;

  beforeEach(() => component = new EvbRange());

  it('should render', () => {
    expect(component.render()).toMatchSnapshot();
  });
});
