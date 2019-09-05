import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'evb-filepreview',
  styleUrl: 'evb-file-preview.css',
  shadow: true
})
export class EvbFilePreview implements ComponentInterface {

  /**
   * The source (data) url of the image to preview
   */
  @Prop() src: string;
  @Prop() alt = 'preview';
  @Prop() caption?: string;

  render() {
    if (this.src) {
      const caption = <figcaption>{this.caption}</figcaption>;
      return (
        <figure>
          <img src={this.src} alt={this.alt} />
          {this.caption ? caption : ''}
        </figure>
      );
    }

    return '';
  }
}
