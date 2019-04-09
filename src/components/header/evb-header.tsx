import { Component, ComponentInterface, Prop } from '@stencil/core';

const MIN_HEADING = 1;
const MAX_HEADING = 6;

/**
 * Container for buttons
 */
@Component({
  tag: 'evb-header',
  styleUrl: 'evb-header.css',
  shadow: true
})
export class EvbButtonBar implements ComponentInterface {

  @Prop() heading!: number | string;

  constructor() {
    this.validateHeading(this.heading);
  }

  render() {
    // tslint:disable-next-line: no-any variable-name
    const TagType = `h${this.heading}` as any;
    return (
      <TagType class='header'>
        <slot />
      </TagType>
    );
  }

  /**
   * Validates that the heading is a valid heading (between 1 and 6)
   *
   * @throws when heading is not valid
   */
  private validateHeading(heading: number | string) {
    const number: number = typeof heading === 'number' ? heading : parseInt(heading, 10);
    if (number > MAX_HEADING || number < MIN_HEADING) {
      throw new Error('Heading must be between 1 and 6');
    }
  }
}
