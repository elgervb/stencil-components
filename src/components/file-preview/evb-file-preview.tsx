import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'evb-filepreview',
  styleUrl: 'evb-filepreview.css',
  shadow: true
})
export class EvbFilePreview {

  @Prop() src: string;
  @Prop() alt: string = 'preview';
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
