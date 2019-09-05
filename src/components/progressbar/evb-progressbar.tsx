import { Component, ComponentInterface, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';

const HALFWAY_THERE = 50;
@Component({
  tag: 'evb-progressbar',
  styleUrl: 'evb-progressbar.css',
  shadow: true
})
export class EvbProgressBar implements ComponentInterface {

  /**
   * Progress percentage
   */
  @Prop() progress: number;
  /**
   * Show the progress as text in the progress bar
   */
  @Prop() text: boolean;
  /**
   * The height of the bar in pixels
   */
  @Prop() height = 24;

  @Event() completed: EventEmitter<void>;

  @Watch('progress')
  progressUpdate(current: number) {
    if (current >= 100) {
      this.completed.emit();
    }
  }

  hostData() {
    return {
      class: { 'progress--with-text': this.text, 'progress--gt-50': this.progress > HALFWAY_THERE },
      style: { height: `${this.height}px` },
      'data-progress': this.progress || 0
    };
  }
  /**
   * Renders the components
   */
  render() {
    const styles = {
      width: this.progress ? `${this.progress}%` : ''
    };

    return <div class='progress__inner' style={styles}></div>;
  }
}
