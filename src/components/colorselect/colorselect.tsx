import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';

import { FormControl } from '../formcontrols/formcontrol';

@Component({
  tag: 'evb-colorselect',
  styleUrl: 'colorselect.css',
  shadow: true
})
export class Colorselect implements ComponentInterface, FormControl<string> {

  @Prop() colors: string[];
  @Prop() value: string;

  @Event() evbChange: EventEmitter<string>;
  @Event() evbBlur: EventEmitter<void>;
  @Event() evbInput: EventEmitter<string>;

  disabled: boolean; // TODO: implement

  // @Watch('color')
  // updateColor(newColor: string, oldColor: string) {
  //   debugger;
  //   if (newColor !== oldColor) {
  //     this.value = newColor;
  //   }
  // }

  componentDidLoad() {
    this.value = this.value || '';
  }

  setColor(color: string) {
    this.value = color;
    this.evbChange.emit(color);
    this.evbInput.emit(color);
  }

  render() {
    return (
      <ul>
        {this.colors && this.colors.map(color =>
          <li>
            <button
              onClick={() => this.setColor(color)}
              onBlur={() => this.evbBlur.emit()}
              class={{ color: true, 'is-selected': color === this.value }}
              disabled={this.value === color}
              style={{ background: color }}>
            </button>
          </li>
        )}
      </ul>
    );
  }
}
