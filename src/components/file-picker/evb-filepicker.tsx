import { Component, ComponentInterface, Element, Event, EventEmitter, Listen, Method, Prop } from '@stencil/core';

import { readImage } from '../../utils/file/read-file';

import { PickedFile } from './pickedfile';

@Component({
  tag: 'evb-filepicker',
  styleUrl: 'evb-filepicker.css',
  shadow: true
})
export class EvbFilepicker implements ComponentInterface {

  /** indicates that the user may choose more than one file */
  @Prop() multiple: boolean;

  /**
   * A string that defines the file types the file input should accept. This string is a
   * comma-separated list of unique file type specifiers.
   * To accept images, video and audio, use: accept="audio/*,video/*,image/*"
   * otherwise provide the correct mimetype, eg: image/png for png images etc
   */
  @Prop() accept: string;

  /**
   * Should we show the input type=file?
   */
  @Prop() input = false;

  /**
   * Emits the dataurl for the image
   */
  @Event() pick: EventEmitter<PickedFile>;

  @Element() private host: HTMLElement;

  /**
   * Returns the (hidden) file input element
   */
  get pickerInput(): HTMLInputElement {
    return this.host.shadowRoot.querySelector<HTMLInputElement>('input[type="file"]');
  }

  @Listen('click')
  handleClick(_: MouseEvent) {
    if (!this.input) {
      this.pickerInput.click();
    }
    // otherwise use the input to pick a file
  }

  @Method()
  handleFiles(files: FileList) {
    if (files && files.length) {
      // tslint:disable-next-line: prefer-for-of for loop for FileList
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (this.validateMimes(file, this.accept)) {
          readImage(file)
            .then(dataUrl => {
              this.pick.emit({
                file,
                dataUrl
              });
            });
        }
      }
    }
  }

  /**
   * Validate a file against allowed mimetypes
   */
  validateMimes(file: File, allowedMimeTypes?: string): boolean {

    // check if we want to limit the filepicking...
    if (!allowedMimeTypes) {
      return true;
    }

    if (allowedMimeTypes.indexOf(',') === -1) {
      return this.validateMimeType(file, allowedMimeTypes);
    } else {
      return allowedMimeTypes.split(',').reduce((acc, cur) =>
        this.validateMimeType(file, cur) || acc, false);
    }
  }

  render() {
    return ([
      <input type='file'
        class={this.input ? '' : 'hidden'}
        onChange={event => this.handleFiles((event.target as HTMLInputElement).files)}
        multiple={this.multiple}
        accept={this.accept} />,
      <slot />
    ]);
  }

  private validateMimeType(file: File, mimeType: string): boolean {
    if (file.type === mimeType) {
      return true;
    }

    // handle audio/*, video/*, image/*
    if (['audio/*', 'video/*', 'image/*'].find(item => item === mimeType)) {
      const wildcardRegex = new RegExp(mimeType.replace('/*', '\/.*'));
      return wildcardRegex.test(file.type);
    }

    const regex = new RegExp(mimeType.trim(), 'i');
    return regex.test(file.type);
  }

}
