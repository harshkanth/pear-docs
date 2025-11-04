---
id: configuration
title: Configuration (Updated)
sidebar_label: Configuration (Updated)
sidebar_position: 4
---

## Configuration

To configure the application, perform the following steps: 

!!! Note
    Application configuration is under the `pear` property in `package.json`

1. Open `package.json` and update it to:

    ```
    {
      ...
      "pear": {
        "gui": {
          "height": 400,
          "width": 700
        }
      }
      ...
    }
    ```

2. Close the app and re-run `pear run --dev .` to see the changes, the initial window size is different now.

See the [Configuration Documentation](https://docs.pears.com/pear-runtime/configuration) for all options.

## Next

* [Making a Pear Desktop Application](https://docs.pears.com/guides/making-a-pear-desktop-app)
