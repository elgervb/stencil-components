import { EvbFlyout } from './evb-flyout';

describe('EvbFlyout', () => {
  let component: EvbFlyout;
  const closeSpy = jest.fn();
  const openSpy = jest.fn();

  beforeEach(() => {
    component = new EvbFlyout();
    component.onClose = { emit: closeSpy };
    component.onOpen = { emit: openSpy };
  });

  afterEach(() => jest.resetAllMocks());

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.render()).toMatchSnapshot();
  });

  it('should render host class when openend', () => {
    component.open = true;
    const classes = component.hostData();
    expect(classes.class['flyout--open']).toBe(true);
    expect(component.render()).toMatchSnapshot();
  });

  it('should not render host class when openend', () => {
    component.open = false;
    const classes = component.hostData();
    expect(classes.class['flyout--open']).toBe(false);
    expect(component.render()).toMatchSnapshot();
  });

  it('should open and emit', () => {
    expect(component.open).toBeFalsy();

    component.toggle();
    expect(component.open).toBeTruthy();
    expect(openSpy).toHaveBeenCalledTimes(1);
  });

  it('should force open and emit', () => {
    expect(component.open).toBeFalsy();

    component.toggle(true); // open
    expect(component.open).toBeTruthy();
    expect(openSpy).toHaveBeenCalledTimes(1);
  });

  it('should close and emit', () => {
    expect(component.open).toBeFalsy();

    component.toggle(); // open
    component.toggle(); // close
    expect(component.open).toBeFalsy();
    expect(closeSpy).toHaveBeenCalledTimes(1);
  });

  it('should force close and emit', () => {
    expect(component.open).toBeFalsy();

    component.toggle(false); // close
    expect(component.open).toBeFalsy();
    expect(closeSpy).toHaveBeenCalledTimes(1);
  });

  it('should close with escape key and emit', () => {
    expect(component.open).toBeFalsy();

    component.toggle(true); // open
    const event = { key: 'Escape' } as KeyboardEvent;
    component.close(event);
    expect(component.open).toBeFalsy();
    expect(closeSpy).toHaveBeenCalledTimes(1);
  });

  it('should notclose with escape key when not opened', () => {
    expect(component.open).toBeFalsy();

    const event = { key: 'Escape' } as KeyboardEvent;
    component.close(event);
    expect(component.open).toBeFalsy();
    expect(closeSpy).not.toHaveBeenCalled();
  });
});
