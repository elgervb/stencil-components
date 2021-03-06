# evb-filepicker



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                                                | Type      | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `accept`   | `accept`   | A string that defines the file types the file input should accept. This string is a comma-separated list of unique file type specifiers. To accept images, video and audio, use: accept="audio/*,video/*,image/*" otherwise provide the correct mimetype, eg: image/png for png images etc | `string`  | `undefined` |
| `input`    | `input`    | Should we show the input type=file?                                                                                                                                                                                                                                                        | `boolean` | `false`     |
| `multiple` | `multiple` | indicates that the user may choose more than one file                                                                                                                                                                                                                                      | `boolean` | `undefined` |


## Events

| Event  | Description                     | Type                      |
| ------ | ------------------------------- | ------------------------- |
| `pick` | Emits the dataurl for the image | `CustomEvent<PickedFile>` |


## Methods

### `handleFiles(files: FileList) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [evb-dropzone](../file-dropzone)

### Graph
```mermaid
graph TD;
  evb-dropzone --> evb-filepicker
  style evb-filepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
