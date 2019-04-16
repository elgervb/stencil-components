import { Component, ComponentInterface, Prop } from '@stencil/core';

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
  @Prop() align: 'top' | 'center' | 'bottom';

  hostData() {
    return {
      class: {
        [`justify-${this.justify || 'left'}`]: true,
        [`align-${this.align || 'center'}`]: true
      }
    };
  }

  render() {
    return (
      <slot />
    );
  }
}
