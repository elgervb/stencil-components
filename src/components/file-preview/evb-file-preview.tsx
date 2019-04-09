import { Component, Prop, ComponentInterface } from "@stencil/core";

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
  /**
   * The alt text
   */
  @Prop() alt: string = 'preview';
  /**
   * an optional caption to show the the user
   */
  @Prop() caption?: string;

  render() {
    if (this.src) {
      const caption = <figcaption>{this.caption}</figcaption>
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
