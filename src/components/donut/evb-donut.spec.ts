import { EvbDonut } from './evb-donut';

describe('EvbDonut', () => {
  let component: EvbDonut;

  beforeEach(() => component = new EvbDonut());

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.render()).toMatchSnapshot();
  });
});
