import { EvbHeader } from './evb-header';

describe('EvbRange', () => {
  let component: EvbHeader;

  beforeEach(() => component = new EvbHeader());

  it('should render', () => {
    expect(component.render()).toMatchSnapshot();
  });
});
