import { Component, Element, Listen, State, Event, EventEmitter, ComponentInterface } from "@stencil/core";
import { PickedFile } from "../file-picker/pickedfile";

@Component({
  tag: 'evb-dropzone',
  shadow: true,
  styleUrl: 'evb-dropzone.css'
})
export class EvbDropzone implements ComponentInterface {

  @Event()
  dropped: EventEmitter<PickedFile>;

  /**
   * Dropzone is active when the user is dragging
   */
  @State()
  private active: boolean;

  /**
   * Indicated that the user hovers above the dropzone
   */
  @State()
  private hover: boolean;

  @Element()
  host: HTMLElement;

  private filePicker: HTMLEvbFilepickerElement;

  @Listen('window:dragstart')
  dragStart() {
    this.active = true;
  }

  @Listen('window:dragend')
  dragEnd() {
    this.active = false;
  }

  @Listen('dragover')
  dragOver(e: DragEvent) {
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  }

  @Listen('dragenter')
  dragEnter() {
    this.hover = true;
  }

  @Listen('dragleave')
  dragLeave() {
    this.hover = false;
  }

  @Listen('drop')
  drop(event: DragEvent) {
    event.stopPropagation();
    if (event.dataTransfer.files) {
      this.filePicker.handleFiles(event.dataTransfer.files);
    }
  }

  componentDidLoad() {
    // we cannot use @Listen('dragover) as it will throw an error:
    // Unable to preventDefault inside passive event listener invocation.
    this.host.addEventListener('dragover', this.cancelEvent);
    this.host.addEventListener('drop', this.cancelEvent);

    this.filePicker = this.host.shadowRoot.querySelector('evb-filepicker');
  }

  componentDidUnload() {
    this.host.removeEventListener('dragover', this.cancelEvent);
    this.host.removeEventListener('drop', this.cancelEvent);
  }

  hostData() {
    return {
      'class': {
        'dropzone--active': this.active,
        'dropzone--hover': this.hover
      },
    };
  }

  render() {
    return <evb-filepicker onPick={event => this.dropped.emit(event.detail)}></evb-filepicker>;
  }

  private cancelEvent(event: DragEvent) {
    event.preventDefault();
  }
}
