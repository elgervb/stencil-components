import { Component, ComponentInterface, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'evb-formcontrol',
  shadow: true,
  styleUrls: [
    'evb-formcontrol.css',
    'evb-formcontrol-textarea.css'
  ]
})
export class EvbFormControl implements ComponentInterface {

  @Element() host: HTMLElement;
  /**
   * renders childs (eg. label + input) on the same line
   */
  @Prop() vertical = false;

  render() {
    this.host.classList.toggle('vertical', this.vertical);
    return (
      <slot />
    );
  }
}
