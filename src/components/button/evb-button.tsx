import { Component, Prop, EventEmitter, Event } from "@stencil/core";

/**
 * Button component with click, focus and blur support
 */
@Component({
  tag: 'evb-button',
  styleUrl: 'evb-button.css',
  shadow: false,
  scoped: true
})
export class EvbButton {

  @Prop() type?: 'submit' | 'button' | 'reset' = 'button';
  @Prop() href?: string;

  @Prop() ghost: any = false;

  @Prop({ reflectToAttr: true }) disabled = false;

  @Event() evbFocus!: EventEmitter<void>;
  @Event() evbBlur!: EventEmitter<void>;

  private onBlur = () => this.evbBlur.emit();
  private onFocus = () => this.evbFocus.emit();

  render() {
    const TagType = this.href === undefined ? 'button' : 'a' as any;
    const attrs = (TagType === 'button') ? { type: this.type } : { href: this.href };

    const classes = [];
    this.ghost ? classes.push('ghost') : '';

    return (
      <TagType
        {...attrs}
        className={classes.join(', ')}
        disabled={this.disabled}
        onFocus={this.onFocus}
        onBlur={this.onBlur}>
        <slot/>
      </TagType>
    );
  }
}
