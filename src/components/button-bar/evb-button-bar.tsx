import { Component, Prop, ComponentInterface } from "@stencil/core";

/**
 * Container for buttons
 */
@Component({
  tag: 'evb-button-bar',
  styleUrl: 'evb-button-bar.css',
  shadow: true
})
export class EvbButtonBar implements ComponentInterface {

  /**
   * Justify the contents of the buttonbar
   */
  @Prop() justify: 'left' | 'center' | 'right';

  hostData() {
    return {
      class: {
        [`justify-${this.justify || 'left'}`]: true
      }
    }
  }

  render() {
    return (
      <slot />
    );
  }
}
