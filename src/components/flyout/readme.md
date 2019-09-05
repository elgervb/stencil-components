# evb-flyout



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default     |
| -------- | --------- | ----------- | --------- | ----------- |
| `header` | `header`  |             | `string`  | `undefined` |
| `open`   | `open`    |             | `boolean` | `undefined` |


## Events

| Event   | Description | Type                |
| ------- | ----------- | ------------------- |
| `close` |             | `CustomEvent<void>` |
| `open`  |             | `CustomEvent<void>` |


## Methods

### `toggle(forceOpen?: boolean) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [evb-header](../header)

### Graph
```mermaid
graph TD;
  evb-flyout --> evb-header
  style evb-flyout fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
