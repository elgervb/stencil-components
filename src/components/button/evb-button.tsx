import { Component, Prop, EventEmitter, Event, ComponentInterface } from "@stencil/core";

/**
 * Button component with click, focus and blur support
 */
@Component({
  tag: 'evb-button',
  styleUrl: 'evb-button.css',
  shadow: true
})
export class EvbButton implements ComponentInterface {

  /** The type of the button, leave empty in case of a link */
  @Prop() type?: 'submit' | 'button' | 'reset' = 'button';
  /** The target of the anchor tag */
  @Prop() href?: string;
  /** Invert the coloring of the button */
  @Prop() ghost = false;
  /** Extra rounded colors */
  @Prop() pill = false;

  /** Whether or not the button is disabled*/
  @Prop({ reflectToAttr: true }) disabled = false;

  /** Focus event */
  @Event() evbFocus!: EventEmitter<void>;
  /** Blur event */
  @Event() evbBlur!: EventEmitter<void>;

  private onBlur = () => this.evbBlur.emit();
  private onFocus = () => this.evbFocus.emit();

  /**
   * Renders the components
   */
  render() {
    const TagType = this.href === undefined ? 'button' : 'a' as any;
    const attrs = (TagType === 'button') ? { type: this.type } : { href: this.href };

    const classes = [];
    this.ghost ? classes.push('ghost') : '';
    this.pill ? classes.push('pill') : '';

    return (
      <TagType
        {...attrs}
        className={classes.join(' ')}
        disabled={this.disabled}
        onFocus={this.onFocus}
        onBlur={this.onBlur}>
        <slot />
      </TagType>
    );
  }
}
