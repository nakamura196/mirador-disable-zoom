# mirador-disable-zoom

![Node.js CI](https://github.com/nakamura196/mirador-disable-zoom/workflows/Node.js%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/mirador-disable-zoom.svg)](https://badge.fury.io/js/mirador-disable-zoom)

`mirador-disable-zoom` is a [Mirador 3](https://github.com/projectmirador/mirador) plugin that allows users to disable (and re-enable) zoom controls per window.

This plugin is based on the [mirador-disable-zoom](https://github.com/UCLALibrary/mirador-disable-zoom) plugin by UCLA Library.

![Mirador disable zoom example](./assets/example.png)

When interacting with Mirador on touch devices, users report that they sometimes unintentionally change the zoom level. This plugin adds a button to each window in Mirador that a user can click/touch to disable zooming on that window, until the user does one of the following:

- replaces the current window object with a new object (via the list of loaded manifests)
- moves to a different canvas in the same object
- changes the view type (BookView -> ImageView, and vice versa)

## Configuration

Several configuration options are available on windows that use mirador-disable-zoom.

| Configuration        | type    | default | description           |
| -------------------- | ------- | ------- | --------------------- |
| `disableZoomEnabled` | boolean | false   | Disable zoom controls |

Example configuration:

```javascript
const config = {
  id: "demo",
  windows: [
    {
      disableZoomEnabled: true,
      manifestId: "https://purl.stanford.edu/sn904cj3429/iiif/manifest",
    },
  ],
};
```

## Installing `mirador-disable-zoom`

`mirador-disable-zoom` requires an instance of Mirador 3. See the [Mirador wiki](https://github.com/ProjectMirador/mirador/wiki) for examples of embedding Mirador within an application. See the [live demo's index.js](https://github.com/ProjectMirador/mirador-disable-zoom/blob/master/demo/src/index.js) for an example of importing the `mirador-disable-zoom` plugin and configuring the adapter.

## Contribute

Mirador's development, design, and maintenance is driven by community needs and ongoing feedback and discussion. Join us at our regularly scheduled community calls, on [IIIF slack #mirador](http://bit.ly/iiif-slack), or the [mirador-tech](https://groups.google.com/forum/#!forum/mirador-tech) and [iiif-discuss](https://groups.google.com/forum/#!forum/iiif-discuss) mailing lists. To suggest features, report bugs, and clarify usage, please submit a GitHub issue.
