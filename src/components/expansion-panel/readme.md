# evb-expansion-panel



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                       | Type                            | Default     |
| --------- | --------- | ------------------------------------------------- | ------------------------------- | ----------- |
| `justify` | `justify` | Where to align the title                          | `"center" \| "left" \| "right"` | `'left'`    |
| `open`    | `open`    | Whether the panel is open, eg: shows it's content | `boolean`                       | `false`     |
| `text`    | `text`    | The textual title of the panel                    | `string`                        | `undefined` |


## Events

| Event    | Description                    | Type                |
| -------- | ------------------------------ | ------------------- |
| `closed` | Emits when the panel is closed | `CustomEvent<void>` |
| `opened` | Emits when the panel is opened | `CustomEvent<void>` |


## Methods

### `toggle(force?: boolean) => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
