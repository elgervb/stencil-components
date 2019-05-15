import { EvbExpansionPanel } from './evb-expansion-panel';

describe('EvbExpansionPanel', () => {

  let component: EvbExpansionPanel;

  beforeEach(() => component = new EvbExpansionPanel());

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.render()).toMatchSnapshot();
  });

  it('should render text', () => {
    component.text = 'Hello world';
    component.open = true;
    expect(component.render()).toMatchSnapshot();
  });

  it('should emit when toggled', () => {
    const openedSpy = jest.fn();
    const closedSpy = jest.fn();

    component.opened = { emit: openedSpy };
    component.closed = { emit: closedSpy };

    expect(component.open).toBeFalsy();
    expect(openedSpy).not.toHaveBeenCalled();
    expect(closedSpy).not.toHaveBeenCalled();

    component.toggle(); // open
    expect(component.open).toBeTruthy();
    expect(openedSpy).toHaveBeenCalledTimes(1);
    expect(closedSpy).not.toHaveBeenCalled();

    component.toggle(); // close
    expect(component.open).toBeFalsy();
    expect(openedSpy).toHaveBeenCalledTimes(1);
    expect(closedSpy).toHaveBeenCalledTimes(1);
  });
});
