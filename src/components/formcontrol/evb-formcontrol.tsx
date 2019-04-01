import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'evb-formcontrol',
  shadow: true,
  styleUrl: './evb-formcontrol.css'
})
export class EvbFormControl {

  @Prop({ reflectToAttr: true }) name: string;

  render() {
    return (
      <slot />
    );
  }
}
