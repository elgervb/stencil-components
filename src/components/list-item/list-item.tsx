import { Component, h } from '@stencil/core';

@Component({
  tag: 'evb-list-item',
  styleUrl: 'list-item.css',
  shadow: true
})
export class ListItem {

  render() {
    return (
      <slot></slot>
    );
  }

}
