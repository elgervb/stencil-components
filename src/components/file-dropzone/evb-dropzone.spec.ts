import { EvbDropzone } from './evb-dropzone';

const mockFilepicker = {
  handleFiles: jest.fn()
};

const mockHost = {
  shadowRoot: {
    querySelector: jest.fn(() => mockFilepicker)
  }
};

function createMockDragEvent(hasFile = false): DragEvent {
  const files = hasFile ? [{}] : [];
  // @ts-ignore
  return {
    stopPropagation: jest.fn(),
    preventDefault: jest.fn(),
    // @ts-ignore
    dataTransfer: { files }
  };
}

// tslint:disable: no-unbound-method
describe('EvbDropzone', () => {

  let component: EvbDropzone;

  beforeEach(() => component = new EvbDropzone());

  it('should render', () => {
    expect(component.render()).toMatchSnapshot();
  });

  it('should toggle active', () => {
    expect(isActive(component)).toBeFalsy();
    component.dragStart();
    expect(isActive(component)).toBeTruthy();
    component.dragEnd();
    expect(isActive(component)).toBeFalsy();
  });

  it('should toggle hover', () => {
    expect(isHover(component)).toBeFalsy();
    component.dragEnter();
    expect(isHover(component)).toBeTruthy();
    component.dragLeave();
    expect(isHover(component)).toBeFalsy();
  });

  it('should be able to drop a file', () => {
    // @ts-ignore just ignore error about this mock...
    component.host = mockHost;
    component.componentDidLoad();

    const mockEvent = createMockDragEvent(true);

    component.drop(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();

    expect(mockFilepicker.handleFiles).toHaveBeenCalled();
  });

  it('should call cancel event on dragover', () => {
    // @ts-ignore just ignore error about this mock...
    const mockEvent = createMockDragEvent();

    component.dragOver(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});

function isActive(component: EvbDropzone) {
  return component.hostData().class['dropzone--active'];
}

function isHover(component: EvbDropzone) {
  return component.hostData().class['dropzone--hover'];
}
