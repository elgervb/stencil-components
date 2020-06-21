import { EventEmitter } from '@stencil/core';

export interface FormControl<T> {

  evbChange: EventEmitter<T>;
  evbBlur: EventEmitter<void>;
  evbInput: EventEmitter<T>;

  disabled: boolean;
  value: T;
}
