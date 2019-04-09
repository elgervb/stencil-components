import { Component, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'evb-formcontrol',
  shadow: true,
  styleUrls: [
    'evb-formcontrol.css',
    'evb-formcontrol-textarea.css'
  ]
})
export class EvbFormControl implements ComponentInterface {

  render() {
    return (
      <slot />
    );
  }
}
