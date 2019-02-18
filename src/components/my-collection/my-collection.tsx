import { Component } from '@stencil/core';

@Component({
  tag: 'evb-collection',
  styleUrl: 'my-collection.css',
  shadow: false,
  scoped: true
})
export class Mycollection {

  btnClick(ev: UIEvent) {
    console.log('Clicked', ev.target);
  }

  render() {
    return (
      <section>
        <evb-header heading="1">Evb Components</evb-header>
        <evb-header heading="2">Buttonbar and buttons</evb-header>
        <evb-button-bar>
          <evb-button onClick={ev => this.btnClick(ev)}>button</evb-button>
          <evb-button type="submit" onClick={ev => this.btnClick(ev)}>submit</evb-button>
          <evb-button href="#" onClick={ev => this.btnClick(ev)}>link</evb-button>
          <evb-button ghost="true" onClick={ev => this.btnClick(ev)}>ghost</evb-button>
          <evb-button pill="true" onClick={ev => this.btnClick(ev)}>pill</evb-button>
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
      </section>
    )
  }
}
