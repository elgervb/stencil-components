import { Component, ComponentInterface, Element, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'evb-toggle',
  shadow: true,
  styleUrl: 'evb-toggle.css'
})
export class EvbToggle implements ComponentInterface {

  @Prop() type: 'default' | 'flat' | 'rotate' = 'default';
  @Prop() labelon = 'On';
  @Prop() labeloff = 'Off';
  @Prop() value: boolean;

  @Event() evbBlur: EventEmitter<void>;
  @Event() evbChange: EventEmitter<boolean>;
  @Event() evbFocus: EventEmitter<void>;
  @Event() evbInput: EventEmitter<boolean>;

  @Element() host: HTMLElement;

  get inputValue(): boolean {
    const input: HTMLInputElement = this.host.shadowRoot.querySelector('input[type=checkbox]');
    return input.checked;
  }

  render() {
    const id = 'toggle';

    const attributes = {
      class: `toggle toggle-${this.type}`,
      checked: this.value,
      id
    };

    const labelAttrs = {
      'data-on': this.labelon,
      'data-off': this.labeloff,
      for: id
    };

    return ([
      <input id='toggle1' {...attributes} type='checkbox'
        onBlur={() => this.evbBlur.emit()}
        onChange={() => this.evbChange.emit(this.inputValue)}
        onFocus={() => this.evbFocus.emit()}
        onInput={() => this.evbInput.emit(this.inputValue)} />,
      <label {...labelAttrs}></label>
    ]);
  }
}
