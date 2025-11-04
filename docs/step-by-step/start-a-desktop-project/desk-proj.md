---
id: desk-proj
title: Initialization (Updated)
sidebar_label: Initialization (Updated)
sidebar_position: 1
---

# Star a Pear Desktop Project

This guide help you to generate, configure, and develop a Pear desktop project, in preparation for [Making a Pear Desktop Application](https://docs.pears.com/guides/making-a-pear-desktop-app).

Build with Pear - Episode 01: Developing with Pear

## Initialization

To initialize a desktop project, perform the following steps:

1. Use `pear init` to create a new Pear project.

    ```
    mkdir chat
    cd chat
    pear init --yes
    ```

This creates the base project structure.

* `package.json`. App configuration. Notice the `pear` property.
* `index.html`. App entrypoint.
* `app.js`. Main code.
* `test/index.test.js`. Test skeleton.
