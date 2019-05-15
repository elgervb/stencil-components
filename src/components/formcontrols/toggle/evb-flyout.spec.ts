import { EvbToggle } from './evb-toggle';

describe('EvbToggle', () => {
  let component: EvbToggle;

  beforeEach(() => component = new EvbToggle());

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.render()).toMatchSnapshot();
  });
});
