import { Component, Element, Event, EventEmitter, Prop, Listen } from "@stencil/core";
import { PickedFile } from "./pickedfile";

@Component({
  tag: 'evb-filepicker',
  styleUrl: 'evb-filepicker.css',
  shadow: true
})
export class EvbFilepicker {

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
  @Prop() input: boolean = false;


  @Element() private host: HTMLElement;
  /**
   * Emits the dataurl for the image
   */
  @Event() pick: EventEmitter<PickedFile>;

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

  handleFiles(files: FileList) {
    // TODO: make file type configurable through @Prop
    if (files && files.length) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (this.validateMimes(file, this.accept)) {
          this.loadImage(file);
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
      return allowedMimeTypes.split(',').reduce((acc, cur) => {
        return this.validateMimeType(file, cur) || acc;
      }, false);
    }
  }

  render() {
    return ([
      <input type="file"
        class={this.input ? '' : 'hidden'}
        onChange={event => this.handleFiles((event.target as HTMLInputElement).files)}
        multiple={this.multiple}
        accept={this.accept} />,
      <slot />
    ]);
  }

  private loadImage(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      const dataUrl = reader.result.toString();
      console.log('onPick');
      this.pick.emit({
        file,
        dataUrl
      });
    };

    reader.readAsDataURL(file);
  }

  private validateMimeType(file: File, mimeType: string): boolean {
    if (file.type === mimeType) {
      return true;
    }

    // handle audio/*, video/*, image/*
    if (['audio/*', 'video/*', 'image/*'].find(item => item === mimeType)) {
      const regex = new RegExp(mimeType.replace('/*', '\/.*'));
      return regex.test(file.type);
    }

    const regex = new RegExp(mimeType.trim(), 'i');
    return regex.test(file.type);
  }

}
