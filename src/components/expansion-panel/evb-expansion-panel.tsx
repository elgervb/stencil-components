import { Component, ComponentInterface, Event, EventEmitter, Method, Prop } from '@stencil/core';

@Component({
  tag: 'evb-expansion-panel',
  shadow: true,
  styleUrl: 'expansion-panel.css'
})
export class EvbExpansionPanel implements ComponentInterface {
  /**
   * The textual title of the panel
   */
  @Prop() text: string;
  /**
   * Where to align the title
   */
  @Prop() justify?: 'left' | 'right' | 'center' = 'left';
  /**
   * Whether the panel is open, eg: shows it's content
   */
  @Prop({ mutable: true }) open = false;

  /**
   * Emits when the panel is closed
   */
  @Event() closed: EventEmitter<void>;
  /**
   * Emits when the panel is opened
   */
  @Event() opened: EventEmitter<void>;

  constructor() { }

  ngOnInit() { }

  @Method()
  toggle(force?: boolean) {
    this.open = force !== undefined ? force : !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
  }

  render() {
    const classes = ['title', this.justify];
    return ([
      <div class={classes.join(' ')} onClick={() => this.toggle()}>{this.text}</div>,
      this.open ? <slot></slot> : ''
    ]);
  }

}
