import { Component, ComponentInterface, Prop } from '@stencil/core';

const MIN_DIAMETER = 1;
const PADDING = 4;
const MAX_PERCENTAGE = 100;

@Component({
  tag: 'evb-donut',
  shadow: true,
  styleUrl: 'evb-donut.css'
})
export class EvbDonut implements ComponentInterface {

  @Prop() progress = 0;
  @Prop() invert = false;
  @Prop() diameter = 120;
  @Prop() thickness = 12;
  @Prop() text = false;

  /** the circumference fo the donut */
  private circumference = (this.diameter - this.thickness) * Math.PI;

  /**
   * Get the SVG viewbox value for the recalculated donut
   */
  get viewbox() {
    return `0 0 ${this.diameter} ${this.diameter}`;
  }

  get x() {
    return Math.max((this.diameter / 2 - this.thickness / 2), 0);
  }

  get fontSize() {
    return Math.max(MIN_DIAMETER, (this.diameter - PADDING - (this.thickness * 2)) / 2);
  }

  hostData() {
    return {
      class: {
        'progress--with-text': this.text
      },
      style: {
        fontSize: `${this.fontSize}px`
      },
      'data-progress': this.progress || 0
    };
  }

  render() {
    this.circumference = (this.diameter - this.thickness) * Math.PI;
    const progressValueClass = this.invert ? 'arc-left progress__value' : 'progress__value';
    const progressStyles = this.calculateProgressStyles(this.progress);

    return (
      <svg class='progress'
        width={this.diameter}
        height={this.diameter}
        viewBox={this.viewbox}>

        <circle class='progress__meter'
          cx={this.diameter / 2}
          cy={this.diameter / 2}
          r={this.x}
          stroke-width={this.thickness} />

        <circle
          class={progressValueClass}
          style={progressStyles}
          cx={this.diameter / 2}
          cy={this.diameter / 2}
          r={this.x}
          stroke-width={this.thickness} />
      </svg>
    );
  }

  /**
   * Calculate the progress and set styling properties accordingly
   */
  private calculateProgressStyles(value: number) {
    const progress = value / MAX_PERCENTAGE;
    const dashoffset = this.circumference * (1 - progress);
    return {
      strokeDashoffset: dashoffset,
      strokeDasharray: this.circumference
    };
  }
}
