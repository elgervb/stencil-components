import { Component, ComponentInterface, Element, h } from '@stencil/core';

@Component({
  tag: 'evb-list',
  styleUrl: 'list.css',
  shadow: true
})
export class List implements ComponentInterface {

  @Element() el: HTMLElement;

  render() {
    return (
      <div role='list'>
        <slot></slot>
      </div>
    );
  }

}
