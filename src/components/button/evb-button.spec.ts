import { EvbButton } from './evb-button';

describe('EvbButton', () => {
  let component: EvbButton;

  beforeEach(() => component = new EvbButton());

  it('should render', () => {
    expect(component.render()).toMatchSnapshot();
  });

  it('should render with Props', () => {
    component.disabled = false;
    component.ghost = true;
    component.pill = true;
    component.type = 'submit';

    expect(component.render()).toMatchSnapshot();
  });

  it('should render as a reset button', () => {
    component.type = 'reset';

    expect(component.render()).toMatchSnapshot();
  });

  it('should render as a link', () => {
    component.href = '/assets/nice.gif';

    expect(component.render()).toMatchSnapshot();
  });

  it('should render as a link button', () => {
    component.type = 'link';

    expect(component.render()).toMatchSnapshot();
  });

});
