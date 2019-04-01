import { Component } from "@stencil/core";


@Component({
  tag: 'evb-range',
  styleUrl: 'formcontrol-range.css',
  shadow: true
})
export class EvbRange {

  render() {
    return (
      <input type="range" />
    );
  }
}
