import { Component, ComponentInterface, Element, h, Listen, Method, Prop } from '@stencil/core';

@Component({
  tag: 'evb-accordion',
  shadow: true
})
export class EvbAccordion implements ComponentInterface {

  /**
   * When loaded, open the nth expansion panel. Count starts at 1
   */
  @Prop() openNth?: number;

  @Element()
  host: HTMLElement;

  private currentOpen: HTMLEvbExpansionPanelElement;

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
    if (this.openNth) {
      this.openPanel(this.openNth);
    }
  }

  @Method()
  async openPanel(nth: number) {
    const panel = this.host.querySelector<HTMLEvbExpansionPanelElement>(`evb-expansion-panel:nth-child(${nth})`);
    panel.toggle(true);
  }

  render() {
    return <slot></slot>;
  }
}
