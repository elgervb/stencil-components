import { newSpecPage, SpecPage } from '@stencil/core/dist/testing';

import { EvbFilepicker } from '../file-picker/evb-filepicker';

import { EvbDropzone } from './evb-dropzone';

const mockFilepicker = {
  handleFiles: jest.fn()
};
jest.fn<HTMLElement, void[]>(() => ({
  shadowRoot: {
    querySelector: (_: string) => { }
  } as ShadowRoot
} as HTMLElement
));
const mockHost: HTMLElement = {
  shadowRoot: {
    querySelector: (_: string) => mockFilepicker
  } as ShadowRoot
} as HTMLElement;

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

  let page: SpecPage;
  let component: EvbDropzone;

  beforeEach(async () => page = await newSpecPage({
    components: [EvbDropzone, EvbFilepicker],
    html: '<evb-dropzone>asdf</evb-dropzone>'
  }));

  beforeEach(() => component = page.rootInstance);

  it('should render', () => {
    expect(page.root).toMatchSnapshot();
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

  it('should cancel the drop event', () => {

    const mockEvent = createMockDragEvent(true);

    component.drop(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });
  it('should be able to drop a file', () => {
    // Object.defineProperty(component, 'host', { value: mockHost });
    jest.spyOn(component, 'host', 'get').mockReturnValue(mockHost);
    component.componentDidLoad();

    const mockEvent = createMockDragEvent(true);

    component.drop(mockEvent);

    expect(mockFilepicker.handleFiles).toHaveBeenCalled();
  });

  it('should call cancel event on dragover', () => {
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
