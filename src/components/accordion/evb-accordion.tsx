import { Component, ComponentInterface, Element, Listen } from '@stencil/core';

@Component({
  tag: 'evb-accordion',
  shadow: true
})
export class EvbAccordion implements ComponentInterface {

  @Element()
  host: HTMLElement;

  currentOpen: HTMLEvbExpansionPanelElement;

  @Listen('closed')
  childClosed() {
    delete this.currentOpen;
  }

  @Listen('opened')
  childOpened(event: CustomEvent) {
    if (this.currentOpen && this.currentOpen !== event.target) {
      this.currentOpen.toggle();
    }
    this.currentOpen = event.target as HTMLEvbExpansionPanelElement;
  }

  componentDidLoad() {
    // this.host.shadowRoot.querySelector()
    const panel = this.host.querySelector<HTMLEvbExpansionPanelElement>('evb-expansion-panel');
    panel.toggle();
    console.log('asdf', this.host);
  }

  render() {
    return <slot></slot>;
  }
}
