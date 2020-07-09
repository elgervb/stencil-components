import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'evb-icon',
  styleUrl: 'icon.css',
  shadow: false,
  scoped: true
})
export class Icon {

  @Prop() name: string;

  render() {
    const href = `#${this.name}`;

    return (
      <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
        <use xlinkHref={href} />
      </svg>
    );
  }

}
