import { Component, Prop } from "@stencil/core";

/**
 * Container for buttons
 */
@Component({
  tag: 'evb-header',
  styleUrl: 'evb-header.css',
  shadow: false,
  scoped: true
})
export class EvbButtonBar {

  @Prop() heading!: number | string;

  constructor() {
    this.validateHeading(this.heading);
  }

  render() {
    const TagType = `h${this.heading}` as any;
    return (
      <TagType class="header">
        <slot/>
      </TagType>
    );
  }

  /**
   * Validates that the heading is a valid heading (between 1 and 6)
   *
   * @throws when heading is not valid
   */
  private validateHeading(heading: number | string) {
    const number: number = typeof heading === 'number' ? heading : parseInt(heading, 10)
    if (number > 6 || number < 1) {
      throw new Error('Heading must be between 1 and 6');
    }
  }
}
