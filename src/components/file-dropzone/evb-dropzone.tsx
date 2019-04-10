import { Component, ComponentInterface, Element, Event, EventEmitter, Listen, Prop, State } from '@stencil/core';

import { PickedFile } from '../file-picker/pickedfile';

@Component({
  tag: 'evb-dropzone',
  styleUrl: 'evb-dropzone.css',
  shadow: true,
})
export class EvbDropzone implements ComponentInterface {

  /**
   * A string that defines the file types the file input should accept. This string is a
   * comma-separated list of unique file type specifiers.
   * To accept images, video and audio, use: accept="audio/*,video/*,image/*"
   * otherwise provide the correct mimetype, eg: image/png for png images etc
   */
  @Prop() accept: string;

  /**
   * Fired after a file has been picked§
   */
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

  @Listen('dragover', { passive: false })
  dragOver(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }

  @Listen('dragenter')
  dragEnter() {
    this.hover = true;
  }

  @Listen('dragleave')
  dragLeave() {
    this.hover = false;
  }

  @Listen('drop', { passive: false })
  drop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      this.filePicker.handleFiles(event.dataTransfer.files);
    }

    this.active = false;
    this.hover = false;
  }

  componentDidLoad() {
    console.log('HOST', this.host);
    this.filePicker = this.host.shadowRoot.querySelector('evb-filepicker');
  }

  hostData() {
    return {
      class: {
        'dropzone--active': this.active,
        'dropzone--hover': this.hover
      },
    };
  }

  render() {
    return ([
      <evb-filepicker
        onPick={event => this.dropped.emit(event.detail)}
        accept={this.accept}></evb-filepicker>,
      <slot />
    ]);
  }
}
