import { Component, ComponentWillLoad, State, Prop, } from '@stencil/core';

@Component({
  tag: 'evb-collection',
  styleUrl: 'my-collection.css',
  shadow: true,
})
export class Mycollection implements ComponentWillLoad {

  @Prop() heading: string;
  @State()
  progress = 10;

  btnClick(ev: UIEvent) {
    console.log('Clicked', ev.target);
  }

  componentWillLoad() {
    setInterval(() => this.progress = Math.floor(Math.random() * 100) + 1, 2500);
  }

  test(event: CustomEvent<number>) {
    console.log(event.detail, event);
  }

  render() {
    return (
      <section>
        <evb-header class="green" heading="1">{this.heading}</evb-header>

        <evb-header heading="2">File upload</evb-header>
        <evb-filepicker onPick={file => console.log(file)}></evb-filepicker> <br />
        <evb-filepicker onPick={file => console.log(file)} multiple={true} accept="image/*">
          <p>multiple images</p>
        </evb-filepicker>

        <evb-header heading="2">Progress bar</evb-header>
        <evb-progressbar progress={this.progress} text={true}></evb-progressbar>

        <evb-header heading="2">Buttonbar and buttons</evb-header>
        <evb-button-bar>
          <evb-button onClick={ev => this.btnClick(ev)}>button</evb-button>
          <evb-button type="submit" onClick={ev => this.btnClick(ev)}>submit</evb-button>
          <evb-button href="#" onClick={ev => this.btnClick(ev)}>link</evb-button>
          <evb-button ghost={true} onClick={ev => this.btnClick(ev)}>ghost</evb-button>
          <evb-button pill={true} onClick={ev => this.btnClick(ev)}>pill</evb-button>
          <evb-button pill={true} ghost={true} onClick={ev => this.btnClick(ev)}>ghost pill</evb-button>
          <evb-button disabled onClick={ev => this.btnClick(ev)}>disabled</evb-button>
        </evb-button-bar>

        <evb-header heading="2">Buttonbar: justify <em>left, right or center</em></evb-header>
        <evb-button-bar justify="center">
          <evb-button>cancel</evb-button>
          <evb-button>save</evb-button>
        </evb-button-bar>
        <evb-button-bar justify="right">
          <evb-button>cancel</evb-button>
          <evb-button>save</evb-button>
        </evb-button-bar>

        <evb-header heading="2">Forms</evb-header>
        <evb-formcontrol>
          <input type="text" placeholder="Enter a value" />
        </evb-formcontrol>
        <evb-formcontrol>
          <evb-range value={10} min={0} max={100} onEvbInput={event => this.test(event)} />
        </evb-formcontrol>
        <evb-formcontrol>
          <textarea placeholder="Enter a value" />
        </evb-formcontrol>
      </section>
    )
  }
}
