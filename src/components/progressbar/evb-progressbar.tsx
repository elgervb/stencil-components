import { Component, Prop, Watch, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'evb-progressbar',
  styleUrl: 'evb-progressbar.css',
  shadow: false,
  scoped: true
})
export class ProgressBar {

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
  progressUpdate(current: number, previous: number) {
    console.log(`progress updated from ${previous} to ${current}`);

    if (current >= 100) {
      this.completed.emit();
    }
  }

  hostData() {
    return {
      'class': { 'progress--with-text': this.text, 'progress--gt-50': this.progress > 50 },
      'style': { height: `${this.height}px` },
      'data-progress': this.progress || 0
    };
  }
  /**
   * Renders the components
   */
  render() {
    const styles = {
      width: `${this.progress}%`
    };

    return <div class="progress__inner" style={styles}></div>;
  }
}
