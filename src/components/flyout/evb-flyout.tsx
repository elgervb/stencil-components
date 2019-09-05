import { Component, ComponentInterface, Event, EventEmitter, h, Listen, Method, Prop } from '@stencil/core';

@Component({
  tag: 'evb-flyout',
  shadow: true,
  styleUrl: 'evb-flyout.css'
})
export class EvbFlyout implements ComponentInterface {

  @Prop({ mutable: true }) open: boolean;
  @Prop() header: string;

  @Event({ eventName: 'close' }) onClose: EventEmitter<void>;
  @Event({ eventName: 'open' }) onOpen: EventEmitter<void>;

  @Listen('keydown', { target: 'window' })
  close(event: KeyboardEvent) {
    if (this.open && event.key === 'Escape') {
      this.toggle(false);
    }
  }

  @Method()
  async toggle(forceOpen?: boolean) {
    this.open = forceOpen !== undefined ? forceOpen : !this.open;

    this.open ? this.onOpen.emit() : this.onClose.emit();
  }

  hostData() {
    return {
      class: {
        'flyout--open': this.open
      }
    };
  }

  render() {
    if (!this.open) {
      return '';
    }
    const heading = <evb-header heading='3'>{this.header}</evb-header>;

    return (
      <aside class='flyout'>
        <header>
          {heading}
          <button class='close' onClick={() => this.open = false}>&times;</button>
        </header>
        <slot />
      </aside>
    );
  }
}
