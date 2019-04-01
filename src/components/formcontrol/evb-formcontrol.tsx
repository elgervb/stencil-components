import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'evb-formcontrol',
  shadow: true,
  styleUrls: [
    'evb-formcontrol.css',
    'evb-formcontrol-textarea.css'
  ]
})
export class EvbFormControl {

  @Prop({ reflectToAttr: true }) name: string;

  render() {
    return (
      <slot />
    );
  }
}
