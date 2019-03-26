import { Component, Prop, Watch, State } from "@stencil/core";

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
  @Prop() progress: number | string;
  /**
   * Show the progress as text in the progress bar
   */
  @Prop() text: boolean | 'true' | 'false';
  /**
   * The height of the bar in pixels
   */
  @Prop() height = 24;

  @State() currentColor: 'danger' | 'neutral' | 'good';

  @Watch('progress')
  applyColorClasses() {
    // TODO:
  }

  hostData() {
    return {
      'class': { 'progress--with-text': this.text, 'progress--gt-50': this.progress > 50 },
      'style': { height: `${this.height}px` },
      'data-progress': this.progress
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
