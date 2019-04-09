import { EvbDropzone } from './evb-dropzone';

describe('EvbDropzone', () => {

  let component: EvbDropzone;

  beforeEach(() => component = new EvbDropzone());

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
});

function isActive(component: EvbDropzone) {
  return component.hostData().class['dropzone--active'];
}

function isHover(component: EvbDropzone) {
  return component.hostData().class['dropzone--hover'];
}
