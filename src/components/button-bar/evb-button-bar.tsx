import { Component, Prop } from "@stencil/core";

/**
 * Container for buttons
 */
@Component({
  tag: 'evb-button-bar',
  styleUrl: 'evb-button-bar.css',
  shadow: true
})
export class EvbButtonBar {

  @Prop() justify: 'left' | 'center' | 'right';

  hostData() {
    return {
      class: `justify-${this.justify}`
    }
  }

  render() {
    return (
      <slot />
    );
  }
}
